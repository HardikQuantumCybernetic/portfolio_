import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => (
  <section className="min-h-screen flex items-center pt-20">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <Skeleton className="h-10 w-64 rounded-full" />
          <div className="space-y-4">
            <Skeleton className="h-16 w-full max-w-md" />
            <Skeleton className="h-10 w-full max-w-sm" />
          </div>
          <Skeleton className="h-24 w-full max-w-xl" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Skeleton className="w-72 h-72 md:w-96 md:h-96 rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

export const CardSkeleton = () => (
  <div className="p-6 rounded-xl bg-card border border-border">
    <Skeleton className="h-48 w-full rounded-lg mb-4" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-full mb-4" />
    <div className="flex gap-2">
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-8 w-20" />
    </div>
  </div>
);

export const ProjectsSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <Skeleton className="h-6 w-24 mx-auto mb-2" />
        <Skeleton className="h-12 w-64 mx-auto mb-4" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-8">
              <Skeleton className="h-8 w-48 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const AboutSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Skeleton className="h-6 w-24 mx-auto mb-2" />
          <Skeleton className="h-12 w-64 mx-auto" />
        </div>
        <Skeleton className="h-24 w-full max-w-3xl mx-auto mb-8" />
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Skeleton className="h-32 rounded-xl" />
          <Skeleton className="h-32 rounded-xl" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>
        <div className="text-center mb-8">
          <Skeleton className="h-8 w-48 mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-56 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const SkillsSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <Skeleton className="h-6 w-24 mx-auto mb-2" />
        <Skeleton className="h-12 w-48 mx-auto" />
      </div>
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <Skeleton className="h-8 w-48 mb-6" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-4 w-24" />
              <div className="flex gap-3">
                <Skeleton className="h-10 w-24 rounded-lg" />
                <Skeleton className="h-10 w-20 rounded-lg" />
                <Skeleton className="h-10 w-16 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <Skeleton className="h-8 w-36 mb-4" />
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-24 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const ContactSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Skeleton className="h-6 w-24 mx-auto mb-2" />
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="space-y-4 pt-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-16 rounded-lg" />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-12 rounded-lg" />
            <Skeleton className="h-12 rounded-lg" />
            <Skeleton className="h-32 rounded-lg" />
            <Skeleton className="h-12 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const HireMeSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Skeleton className="h-6 w-32 mx-auto mb-2" />
          <Skeleton className="h-12 w-72 mx-auto mb-4" />
          <Skeleton className="h-6 w-full max-w-lg mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-64 rounded-xl" />
      </div>
    </div>
  </section>
);
