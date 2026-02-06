import MainLayoutComponent from "@/components/layouts/mainLayout/index.tsx";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayoutComponent>
      {children}
    </MainLayoutComponent>
  );
}
