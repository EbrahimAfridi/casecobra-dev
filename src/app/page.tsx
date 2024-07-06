import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 sm:pb-32 lg:pb-52 pt-10 lg:pt-24 xl:pt-32 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-8">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
