"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen">
      <Button variant="contained" onClick={() => router.push("/news")}>
        News
      </Button>
    </div>
  );
};

export default Home;
