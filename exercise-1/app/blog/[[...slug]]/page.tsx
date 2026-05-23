type Props = {
   params: { 
    slug?: string[] 
  }
};

export default function BlogPage({ params }: Props) {
  const slugPath = params.slug?.join(" / ") || "Home";
  return <h2>Blog path: {slugPath}</h2>;
}
