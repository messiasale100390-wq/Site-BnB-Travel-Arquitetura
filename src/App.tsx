import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Toaster } from "sonner";

import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Sobre } from "@/pages/Sobre";
import { Servicos } from "@/pages/Servicos";
import { Milhas } from "@/pages/Milhas";
import { Roteiros } from "@/pages/Roteiros";
import { RoteiroDetail } from "@/pages/RoteiroDetail";
import { Blog } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { FaqPage } from "@/pages/Faq";
import { Contato } from "@/pages/Contato";
import { Privacidade } from "@/pages/Privacidade";
import { NotFound } from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#2F3E46",
            color: "#F5EDE6",
            border: "1px solid #3F5058",
          },
        }}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/milhas" element={<Milhas />} />
          <Route path="/roteiros" element={<Roteiros />} />
          <Route path="/roteiros/:slug" element={<RoteiroDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
