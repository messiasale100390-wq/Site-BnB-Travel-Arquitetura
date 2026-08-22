import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/shared/Reveal";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { POSTS } from "@/data/blog";

function formatarData(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="container-narrow">
        <Reveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-wide text-navy/50 hover:text-gold-dark"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao blog
          </Link>

          <SectionEyebrow className="mt-8">
            {formatarData(post.data)} · {post.categoria}
          </SectionEyebrow>
          <h1 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">{post.titulo}</h1>
        </Reveal>

        <Reveal delay={80}>
          <img
            src={post.imagemCapa}
            alt={post.titulo}
            className="mt-10 aspect-[16/9] w-full object-cover"
          />
        </Reveal>

        <div className="mt-10 space-y-6">
          {post.corpo.map((paragrafo, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="font-sans text-base leading-relaxed text-navy/80">{paragrafo}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
