import "/src/styles/globals.scss";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{}}>
      <main className="h-screen w-screen flex items-center justify-center">
        <div className="p-4 md:h-4/5 h-full md:w-4/5 w-full mx-auto my-auto bg-[#E3ECFF] rounded-3xl">
          {children}
        </div>
      </main>
    </div>
  );
}
