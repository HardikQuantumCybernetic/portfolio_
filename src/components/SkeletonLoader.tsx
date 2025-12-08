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
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

export const AboutSkeleton = () => (
  <div className="space-y-8">
    <div className="text-center">
      <Skeleton className="h-12 w-64 mx-auto mb-4" />
      <Skeleton className="h-6 w-96 mx-auto" />
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <Skeleton className="h-64 w-full rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    </div>
  </div>
);
