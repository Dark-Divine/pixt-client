import MainLayoutComponent from "@/components/layouts/mainLayout";

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
