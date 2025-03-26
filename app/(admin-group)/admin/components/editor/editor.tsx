"use client";

import { savePost } from "@/app/(admin-group)/actions";
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

    try {
      const data = await savePost({ title, content });
      console.log(data);
      alert("저장 완료!");
    } catch (error) {
      console.error("저장 중 에러 발생:", error);
      alert(
        error instanceof Error ? error.message : "저장 중 오류가 발생했습니다."
      );
    }
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
