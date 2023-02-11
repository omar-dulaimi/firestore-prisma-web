import JsonEditor from "@/components/editors/json";
import PrismaEditor from "@/components/editors/prisma";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import * as Constants from "../constants";

export default function Home() {
  const [jsonEditorValue, setJsonEditorValue] = useState("");
  const [prismaEditorValue, setPrismaEditorValue] = useState("");

  const onJsonChange = React.useCallback((value: any) => {
    setJsonEditorValue(value.trim());
  }, []);

  const convert = () => {
    fetch("/api/process", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: jsonEditorValue,
    })
      .then((response) => response.json())
      .then((response) => {
        setPrismaEditorValue(response?.result ?? "");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Head>
        <title>Firestore Prisma</title>
        <meta name="description" content="Convert Firestore data into a Prisma schema" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <JsonEditor editorValue={jsonEditorValue} onChange={onJsonChange} />
        <div className={styles.buttons}>
          <button
            onClick={convert}
            style={{ paddingLeft: "5px", paddingRight: "5px" }}
          >
            Convert
          </button>
          <a
            href="https://www.buymeacoffee.com/omardulaimi"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src={Constants.buyMeACoffeeUrl}
              loader={() => Constants.buyMeACoffeeUrl}
              alt="Buy Me A Coffee"
              height="41"
              width="174"
            />
          </a>
        </div>

        <PrismaEditor editorValue={prismaEditorValue} />
      </main>
    </>
  );
}
