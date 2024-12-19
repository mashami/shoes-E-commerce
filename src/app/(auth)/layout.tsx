import "/src/styles/globals.scss";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="h-screen w-screen flex items-center justify-center">
        <div className="p-4 h-4/5 w-4/5 mx-auto my-auto bg-[#E3ECFF] rounded-3xl">
          {children}
        </div>
      </main>
    </div>
  );
}
