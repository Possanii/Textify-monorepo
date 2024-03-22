"use client";

import { Button } from "@ui/components/ui/button";
import { Input } from "@ui/components/ui/input";
import { toast } from "sonner";

export default function Home() {
  return (
    <div>
      <span className="bg-red-500">Hello</span>
      <Button onClick={() => toast("Toast")}>Click here</Button>
      <Input placeholder="oi" />
    </div>
  );
}
