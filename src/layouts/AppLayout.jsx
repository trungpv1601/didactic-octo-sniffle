// react components
import React from "react";

export default function AppLayout({ children }) {
  return (
    <main className="relative h-screen isolate">
      <img
        src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
        alt=""
        className="absolute inset-0 object-cover object-top w-full h-full -z-10"
      />
      {children}
    </main>
  );
}
