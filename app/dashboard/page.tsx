"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-3xl font-bold text-green-600 mb-2">
        Sesión iniciada con éxito
      </h1>
      <p className="text-lg text-gray-700">
        Bienvenido, administrador
      </p>
    </div>
  );
}

 


  

  
