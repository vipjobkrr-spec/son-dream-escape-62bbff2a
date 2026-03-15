import { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { CalendarDays, ArrowRight, ArrowLeft, Home } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const others = blogPosts.filter((p) => p.slug !== post.slug);
    const shuffled = [...others].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [post]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Статья не найдена</h1>
            <p className="text-muted-foreground mb-6">Такой статьи не существует или она была удалена.</p>
            <Link to="/blog">
              <Button>Вернуться в блог</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const hasContent = post.content && post.content.trim().length > 0;

  return (
    <>
      <SEO
        title={`${post.title} | База отдыха Сон`}
        description={post.excerpt}
        image={post.image}
        url={`/blog/${post.slug}`}
        type="article"
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Breadcrumbs */}
          <ScrollReveal>
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1">
                      <Home className="w-3.5 h-3.5" />
                      Главная
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blog">Блог</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1 max-w-[200px] sm:max-w-none">
                    {post.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ScrollReveal>

          {/* Hero image */}
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[21/9]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <CalendarDays className="w-4 h-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.15}>
            {hasContent ? (
              <article
                className="prose prose-lg max-w-none text-foreground
                  prose-headings:font-display prose-headings:text-foreground prose-headings:font-semibold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="bg-muted/50 rounded-xl p-8 text-center">
                <p className="text-muted-foreground text-lg mb-2">{post.excerpt}</p>
                <p className="text-muted-foreground text-sm">Полный текст статьи скоро появится.</p>
              </div>
            )}
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Хотите отдохнуть в Тенгинке?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Забронируйте домик на базе отдыха «Сон» — бассейн, баня, барбекю и тишина у моря
              </p>
              <Link to="/#booking">
                <Button size="lg" className="gap-2">
                  Забронировать домик
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Back */}
          <div className="mt-8">
            <Button variant="ghost" onClick={() => navigate("/blog")} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Все статьи
            </Button>
          </div>

          {/* Related */}
          {relatedPosts.length > 0 && (
            <ScrollReveal delay={0.1}>
              <div className="mt-16">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Читайте также
                </h2>
                <div className="grid sm:grid-cols-3 gap-5">
                  {relatedPosts.map((rp) => (
                    <Link key={rp.slug} to={`/blog/${rp.slug}`}>
                      <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full">
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={rp.image}
                            alt={rp.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-display text-sm font-semibold text-foreground line-clamp-2 leading-snug">
                            {rp.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
