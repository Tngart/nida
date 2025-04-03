"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push("/news")}>News</Button>
    </>
  );
};

export default Home;
