import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center gap-5">
      <div className="flex items-center gap-2">
        Made with 🍉 by{" "}
        <Link
          href={""}
          target="_blank"
          className="text-accent lg:hover:text-accent/80 transition"
        >
          @Evilxd
        </Link>
      </div>
    </footer>
  );
};
