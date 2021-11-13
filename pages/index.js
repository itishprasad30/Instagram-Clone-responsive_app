import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-300 ">
      <Head>
        <title>Insagram Clone - Itish Prasad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
      <Modal />
      <Footer />
    </div>
  );
}
