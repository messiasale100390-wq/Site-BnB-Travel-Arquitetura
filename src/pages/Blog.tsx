import { Link } from "react-router-dom";

import { Reveal } from "@/components/shared/Reveal";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { POSTS } from "@/data/blog";
import { useSeo } from "@/hooks/useSeo";

function formatarData(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function Blog() {
  useSeo({
    title: "Blog",
    description:
      "Conteúdo educativo sobre milhas e cartões, e bastidores da fundadora da BnB Travel — leveza com propósito, aplicada à viagem e ao dia a dia.",
  });

  return (
    <section className="pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="container">
        <div className="text-center">
          <SectionEyebrow>Bastidores &amp; educação</SectionEyebrow>
          <h1 className="mx-auto mt-4 max-w-xl font-display text-4xl sm:text-5xl">Blog</h1>
        </div>

        <div className="mx-auto mt-20 max-w-3xl divide-y divide-sand/70">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i * 60, 200)}>
              <Link to={`/blog/${post.slug}`} className="group block py-10">
                <p className="label-eyebrow">
                  {formatarData(post.data)} · {post.categoria}
                </p>
                <h2 className="mt-3 font-display text-2xl text-navy transition-colors group-hover:text-gold-dark sm:text-3xl">
                  {post.titulo}
                </h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-navy/70">
                  {post.resumo}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
