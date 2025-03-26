"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  editorContainer,
  editorHeader,
  editorTitleInput,
  editorWrapper,
  mdEditor,
} from "./editor.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function Editor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<string | undefined>("");
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight - 106);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const handleSave = async () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    alert("저장 완료!");
  };

  return (
    <div className={editorContainer}>
      <div className={editorHeader}>
        <input
          autoFocus
          placeholder="제목을 입력하세요.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={editorTitleInput}
        />
        <button onClick={handleSave}>저장하기</button>
      </div>
      <div className={editorWrapper}>
        <MDEditor
          value={content}
          onChange={setContent}
          className={mdEditor}
          height={height}
        />
      </div>
    </div>
  );
}
