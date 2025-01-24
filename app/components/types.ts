export interface Installer {
    id: number,
    name: string,
    phone: string
    mobile: string,
    email: string,
  }

export interface PageProps {
  params: Promise<{
      id: string;
  }>;
}