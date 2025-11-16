export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-2 pt-20 md:pt-40">{children}</div>;
}
