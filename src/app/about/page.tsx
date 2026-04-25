import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "ovoglog를 운영하는 개발자 소개",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-[min(100%_-_28px,720px)] py-12 md:w-[min(1080px,calc(100%_-_40px))] md:py-20">
      <section className="max-w-3xl pb-14 pt-9">
        <p className="mb-3 text-sm font-bold uppercase text-primary">About</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          기술을 이해 가능한 언어로 정리합니다.
        </h1>
        <p className="max-w-2xl text-lg text-muted">
          ovoglog는 구현 과정에서 마주친 선택지, 실패, 개선점을 차분하게 남기는 기술 블로그입니다.
          빠르게 훑고 지나가는 기록보다 나중에 다시 읽어도 도움이 되는 글을 목표로 합니다.
        </p>
      </section>

      <section className="grid gap-4 border-t border-border py-11 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold leading-tight">다루는 것</h2>
          <p className="text-muted">
            Next.js, React, TypeScript, 프론트엔드 아키텍처, 웹 성능, 개발 경험을 기록합니다.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold leading-tight">글쓰기 원칙</h2>
          <p className="text-muted">
            문제를 먼저 설명하고, 선택한 해결책의 이유와 트레이드오프를 함께 남깁니다.
          </p>
        </div>
      </section>
    </main>
  );
}
