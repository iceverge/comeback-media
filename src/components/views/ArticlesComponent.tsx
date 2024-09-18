"use client";
import React, { useState, useEffect, useRef } from "react";

const dummyArticles = [
  `1 Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque
        blandit eleifend nullam efficitur eget. Lacinia nisl at vitae velit
        viverra commodo egestas porta? Interdum ante luctus suspendisse
        vulputate tortor phasellus tempor. Condimentum etiam nostra donec,
        libero lacus consectetur. Est adipiscing eget; diam sociosqu integer
        rutrum facilisis interdum. Luctus hac parturient venenatis; per
        adipiscing purus vivamus. Egestas auctor natoque tellus aliquet senectus
        ligula semper. Montes torquent cras; morbi vulputate nisi curae dapibus.
        Praesent urna nascetur nascetur blandit tempus tortor a potenti.
        Parturient nullam at aliquam; posuere posuere sodales accumsan.
        Elementum primis sit augue, tempor feugiat cubilia parturient rutrum.
        Metus cursus felis vel nascetur sociosqu ex sollicitudin penatibus est.
        Finibus sagittis accumsan nulla suspendisse faucibus. Risus ante varius
        dis commodo vel nisi. Porta parturient dignissim tempus sodales odio
        magna. Nibh gravida purus consectetur et molestie mattis tortor. Cubilia
        sed platea rhoncus quis placerat conubia consequat bibendum class. Class
        vestibulum torquent orci iaculis nunc. Ridiculus litora tristique
        aenean, natoque eleifend cubilia nisi proin. Dis habitasse sociosqu
        donec vivamus ornare massa class feugiat. Posuere accumsan litora
        scelerisque erat metus finibus vivamus tincidunt. Id bibendum efficitur
        turpis tristique ex semper. Augue dis facilisis odio accumsan urna est
        dui. Facilisis aliquam facilisis a hac; maecenas a vehicula
        sollicitudin. Vel cras platea ultricies tortor nostra augue sociosqu.
        Imperdiet ornare maecenas facilisis porttitor euismod litora. Rutrum
        odio inceptos nostra erat morbi congue scelerisque. Ullamcorper
        tristique aptent elit, senectus platea lectus. Fermentum per eget rutrum
        placerat vestibulum feugiat nec. Dolor montes ex tincidunt mauris, non
        placerat hendrerit commodo. Augue dis aptent blandit nulla suspendisse
        orci pretium. Orci potenti finibus nunc porttitor justo semper nascetur.
        Accumsan litora nibh litora habitant lacus interdum; senectus curae
        lobortis? Cras consectetur adipiscing nec parturient scelerisque. Hac
        est laoreet morbi velit lectus. Urna quisque fusce maximus nam
        sollicitudin odio mauris et sed. Nunc fames consequat donec, magna
        facilisis laoreet etiam accumsan. Praesent amet praesent feugiat
        efficitur a ac integer. Magnis molestie ornare nulla cubilia ornare
        convallis posuere felis est. Aptent vulputate luctus hac sapien
        parturient. Sodales risus lectus condimentum porttitor molestie cursus
        efficitur.
        1 Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque
        blandit eleifend nullam efficitur eget. Lacinia nisl at vitae velit
        viverra commodo egestas porta? Interdum ante luctus suspendisse
        vulputate tortor phasellus tempor. Condimentum etiam nostra donec,
        libero lacus consectetur. Est adipiscing eget; diam sociosqu integer
        rutrum facilisis interdum. Luctus hac parturient venenatis; per
        adipiscing purus vivamus. Egestas auctor natoque tellus aliquet senectus
        ligula semper. Montes torquent cras; morbi vulputate nisi curae dapibus.
        Praesent urna nascetur nascetur blandit tempus tortor a potenti.
        Parturient nullam at aliquam; posuere posuere sodales accumsan.
        Elementum primis sit augue, tempor feugiat cubilia parturient rutrum.
        Metus cursus felis vel nascetur sociosqu ex sollicitudin penatibus est.
        Finibus sagittis accumsan nulla suspendisse faucibus. Risus ante varius
        dis commodo vel nisi. Porta parturient dignissim tempus sodales odio
        magna. Nibh gravida purus consectetur et molestie mattis tortor. Cubilia
        sed platea rhoncus quis placerat conubia consequat bibendum class. Class
        vestibulum torquent orci iaculis nunc. Ridiculus litora tristique
        aenean, natoque eleifend cubilia nisi proin. Dis habitasse sociosqu
        donec vivamus ornare massa class feugiat. Posuere accumsan litora
        scelerisque erat metus finibus vivamus tincidunt. Id bibendum efficitur
        turpis tristique ex semper. Augue dis facilisis odio accumsan urna est
        dui. Facilisis aliquam facilisis a hac; maecenas a vehicula
        sollicitudin. Vel cras platea ultricies tortor nostra augue sociosqu.
        Imperdiet ornare maecenas facilisis porttitor euismod litora. Rutrum
        odio inceptos nostra erat morbi congue scelerisque. Ullamcorper
        tristique aptent elit, senectus platea lectus. Fermentum per eget rutrum
        placerat vestibulum feugiat nec. Dolor montes ex tincidunt mauris, non
        placerat hendrerit commodo. Augue dis aptent blandit nulla suspendisse
        orci pretium. Orci potenti finibus nunc porttitor justo semper nascetur.
        Accumsan litora nibh litora habitant lacus interdum; senectus curae
        lobortis? Cras consectetur adipiscing nec parturient scelerisque. Hac
        est laoreet morbi velit lectus. Urna quisque fusce maximus nam
        sollicitudin odio mauris et sed. Nunc fames consequat donec, magna
        facilisis laoreet etiam accumsan. Praesent amet praesent feugiat
        efficitur a ac integer. Magnis molestie ornare nulla cubilia ornare
        convallis posuere felis est. Aptent vulputate luctus hac sapien
        parturient. Sodales risus lectus condimentum porttitor molestie cursus
        efficitur.`,
  `2 Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque
        blandit eleifend nullam efficitur eget. Lacinia nisl at vitae velit
        viverra commodo egestas porta? Interdum ante luctus suspendisse
        vulputate tortor phasellus tempor. Condimentum etiam nostra donec,
        libero lacus consectetur. Est adipiscing eget; diam sociosqu integer
        rutrum facilisis interdum. Luctus hac parturient venenatis; per
        adipiscing purus vivamus. Egestas auctor natoque tellus aliquet senectus
        ligula semper. Montes torquent cras; morbi vulputate nisi curae dapibus.
        Praesent urna nascetur nascetur blandit tempus tortor a potenti.
        Parturient nullam at aliquam; posuere posuere sodales accumsan.
        Elementum primis sit augue, tempor feugiat cubilia parturient rutrum.
        Metus cursus felis vel nascetur sociosqu ex sollicitudin penatibus est.
        Finibus sagittis accumsan nulla suspendisse faucibus. Risus ante varius
        dis commodo vel nisi. Porta parturient dignissim tempus sodales odio
        magna. Nibh gravida purus consectetur et molestie mattis tortor. Cubilia
        sed platea rhoncus quis placerat conubia consequat bibendum class. Class
        vestibulum torquent orci iaculis nunc. Ridiculus litora tristique
        aenean, natoque eleifend cubilia nisi proin. Dis habitasse sociosqu
        donec vivamus ornare massa class feugiat. Posuere accumsan litora
        scelerisque erat metus finibus vivamus tincidunt. Id bibendum efficitur
        turpis tristique ex semper. Augue dis facilisis odio accumsan urna est
        dui. Facilisis aliquam facilisis a hac; maecenas a vehicula
        sollicitudin. Vel cras platea ultricies tortor nostra augue sociosqu.
        Imperdiet ornare maecenas facilisis porttitor euismod litora. Rutrum
        odio inceptos nostra erat morbi congue scelerisque. Ullamcorper
        tristique aptent elit, senectus platea lectus. Fermentum per eget rutrum
        placerat vestibulum feugiat nec. Dolor montes ex tincidunt mauris, non
        placerat hendrerit commodo. Augue dis aptent blandit nulla suspendisse
        orci pretium. Orci potenti finibus nunc porttitor justo semper nascetur.
        Accumsan litora nibh litora habitant lacus interdum; senectus curae
        lobortis? Cras consectetur adipiscing nec parturient scelerisque. Hac
        est laoreet morbi velit lectus. Urna quisque fusce maximus nam
        sollicitudin odio mauris et sed. Nunc fames consequat donec, magna
        facilisis laoreet etiam accumsan. Praesent amet praesent feugiat
        efficitur a ac integer. Magnis molestie ornare nulla cubilia ornare
        convallis posuere felis est. Aptent vulputate luctus hac sapien
        parturient. Sodales risus lectus condimentum porttitor molestie cursus
        efficitur. Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque
        blandit eleifend nullam efficitur eget. Lacinia nisl at vitae velit
        viverra commodo egestas porta? Interdum ante luctus suspendisse
        vulputate tortor phasellus tempor. Condimentum etiam nostra donec,
        libero lacus consectetur. Est adipiscing eget; diam sociosqu integer
        rutrum facilisis interdum. Luctus hac parturient venenatis; per
        adipiscing purus vivamus. Egestas auctor natoque tellus aliquet senectus
        ligula semper. Montes torquent cras; morbi vulputate nisi curae dapibus.
        Praesent urna nascetur nascetur blandit tempus tortor a potenti.
        Parturient nullam at aliquam; posuere posuere sodales accumsan.
        Elementum primis sit augue, tempor feugiat cubilia parturient rutrum.
        Metus cursus felis vel nascetur sociosqu ex sollicitudin penatibus est.
        Finibus sagittis accumsan nulla suspendisse faucibus. Risus ante varius
        dis commodo vel nisi. Porta parturient dignissim tempus sodales odio
        magna. Nibh gravida purus consectetur et molestie mattis tortor. Cubilia
        sed platea rhoncus quis placerat conubia consequat bibendum class. Class
        vestibulum torquent orci iaculis nunc. Ridiculus litora tristique
        aenean, natoque eleifend cubilia nisi proin. Dis habitasse sociosqu
        donec vivamus ornare massa class feugiat. Posuere accumsan litora
        scelerisque erat metus finibus vivamus tincidunt. Id bibendum efficitur
        turpis tristique ex semper. Augue dis facilisis odio accumsan urna est
        dui. Facilisis aliquam facilisis a hac; maecenas a vehicula
        sollicitudin. Vel cras platea ultricies tortor nostra augue sociosqu.
        Imperdiet ornare maecenas facilisis porttitor euismod litora. Rutrum
        odio inceptos nostra erat morbi congue scelerisque. Ullamcorper
        tristique aptent elit, senectus platea lectus. Fermentum per eget rutrum
        placerat vestibulum feugiat nec. Dolor montes ex tincidunt mauris, non
        placerat hendrerit commodo. Augue dis aptent blandit nulla suspendisse
        orci pretium. Orci potenti finibus nunc porttitor justo semper nascetur.
        Accumsan litora nibh litora habitant lacus interdum; senectus curae
        lobortis? Cras consectetur adipiscing nec parturient scelerisque. Hac
        est laoreet morbi velit lectus. Urna quisque fusce maximus nam
        sollicitudin odio mauris et sed. Nunc fames consequat donec, magna
        facilisis laoreet etiam accumsan. Praesent amet praesent feugiat
        efficitur a ac integer. Magnis molestie ornare nulla cubilia ornare
        convallis posuere felis est. Aptent vulputate luctus hac sapien
        parturient. Sodales risus lectus condimentum porttitor molestie cursus
        efficitur.`,
  `3 Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque
        blandit eleifend nullam efficitur eget. Lacinia nisl at vitae velit
        viverra commodo egestas porta? Interdum ante luctus suspendisse
        vulputate tortor phasellus tempor. Condimentum etiam nostra donec,
        libero lacus consectetur. Est adipiscing eget; diam sociosqu integer
        rutrum facilisis interdum. Luctus hac parturient venenatis; per
        adipiscing purus vivamus. Egestas auctor natoque tellus aliquet senectus
        ligula semper. Montes torquent cras; morbi vulputate nisi curae dapibus.
        Praesent urna nascetur nascetur blandit tempus tortor a potenti.
        Parturient nullam at aliquam; posuere posuere sodales accumsan.
        Elementum primis sit augue, tempor feugiat cubilia parturient rutrum.
        Metus cursus felis vel nascetur sociosqu ex sollicitudin penatibus est.
        Finibus sagittis accumsan nulla suspendisse faucibus. Risus ante varius
        dis commodo vel nisi. Porta parturient dignissim tempus sodales odio
        magna. Nibh gravida purus consectetur et molestie mattis tortor. Cubilia
        sed platea rhoncus quis placerat conubia consequat bibendum class. Class
        vestibulum torquent orci iaculis nunc. Ridiculus litora tristique
        aenean, natoque eleifend cubilia nisi proin. Dis habitasse sociosqu
        donec vivamus ornare massa class feugiat. Posuere accumsan litora
        scelerisque erat metus finibus vivamus tincidunt. Id bibendum efficitur
        turpis tristique ex semper. Augue dis facilisis odio accumsan urna est
        dui. Facilisis aliquam facilisis a hac; maecenas a vehicula
        sollicitudin. Vel cras platea ultricies tortor nostra augue sociosqu.
        Imperdiet ornare maecenas facilisis porttitor euismod litora. Rutrum
        odio inceptos nostra erat morbi congue scelerisque. Ullamcorper
        tristique aptent elit, senectus platea lectus. Fermentum per eget rutrum
        placerat vestibulum feugiat nec. Dolor montes ex tincidunt mauris, non
        placerat hendrerit commodo. Augue dis aptent blandit nulla suspendisse
        orci pretium. Orci potenti finibus nunc porttitor justo semper nascetur.
        Accumsan litora nibh litora habitant lacus interdum; senectus curae
        lobortis? Cras consectetur adipiscing nec parturient scelerisque. Hac
        est laoreet morbi velit lectus. Urna quisque fusce maximus nam
        sollicitudin odio mauris et sed. Nunc fames consequat donec, magna
        facilisis laoreet etiam accumsan. Praesent amet praesent feugiat
        efficitur a ac integer. Magnis molestie ornare nulla cubilia ornare
        convallis posuere felis est. Aptent vulputate luctus hac sapien
        parturient. Sodales risus lectus condimentum porttitor molestie cursus
        efficitur. Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque
        blandit eleifend nullam efficitur eget. Lacinia nisl at vitae velit
        viverra commodo egestas porta? Interdum ante luctus suspendisse
        vulputate tortor phasellus tempor. Condimentum etiam nostra donec,
        libero lacus consectetur. Est adipiscing eget; diam sociosqu integer
        rutrum facilisis interdum. Luctus hac parturient venenatis; per
        adipiscing purus vivamus. Egestas auctor natoque tellus aliquet senectus
        ligula semper. Montes torquent cras; morbi vulputate nisi curae dapibus.
        Praesent urna nascetur nascetur blandit tempus tortor a potenti.
        Parturient nullam at aliquam; posuere posuere sodales accumsan.
        Elementum primis sit augue, tempor feugiat cubilia parturient rutrum.
        Metus cursus felis vel nascetur sociosqu ex sollicitudin penatibus est.
        Finibus sagittis accumsan nulla suspendisse faucibus. Risus ante varius
        dis commodo vel nisi. Porta parturient dignissim tempus sodales odio
        magna. Nibh gravida purus consectetur et molestie mattis tortor. Cubilia
        sed platea rhoncus quis placerat conubia consequat bibendum class. Class
        vestibulum torquent orci iaculis nunc. Ridiculus litora tristique
        aenean, natoque eleifend cubilia nisi proin. Dis habitasse sociosqu
        donec vivamus ornare massa class feugiat. Posuere accumsan litora
        scelerisque erat metus finibus vivamus tincidunt. Id bibendum efficitur
        turpis tristique ex semper. Augue dis facilisis odio accumsan urna est
        dui. Facilisis aliquam facilisis a hac; maecenas a vehicula
        sollicitudin. Vel cras platea ultricies tortor nostra augue sociosqu.
        Imperdiet ornare maecenas facilisis porttitor euismod litora. Rutrum
        odio inceptos nostra erat morbi congue scelerisque. Ullamcorper
        tristique aptent elit, senectus platea lectus. Fermentum per eget rutrum
        placerat vestibulum feugiat nec. Dolor montes ex tincidunt mauris, non
        placerat hendrerit commodo. Augue dis aptent blandit nulla suspendisse
        orci pretium. Orci potenti finibus nunc porttitor justo semper nascetur.
        Accumsan litora nibh litora habitant lacus interdum; senectus curae
        lobortis? Cras consectetur adipiscing nec parturient scelerisque. Hac
        est laoreet morbi velit lectus. Urna quisque fusce maximus nam
        sollicitudin odio mauris et sed. Nunc fames consequat donec, magna
        facilisis laoreet etiam accumsan. Praesent amet praesent feugiat
        efficitur a ac integer. Magnis molestie ornare nulla cubilia ornare
        convallis posuere felis est. Aptent vulputate luctus hac sapien
        parturient. Sodales risus lectus condimentum porttitor molestie cursus
        efficitur.`,
  // Add more articles here
];

const ArticlesComponent: React.FC = () => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadedArticles, setLoadedArticles] = useState<string[]>([
    dummyArticles[0],
  ]); // Start with the first article loaded

  const articleRefs = useRef<Array<HTMLDivElement | null>>([]); // Store refs for each article

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = articleRefs.current.reduce((acc, article) => {
        return article ? acc + article.offsetHeight : acc;
      }, 0);

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Calculate total scrollable height
      const totalScrollableHeight = totalHeight - windowHeight;

      if (totalScrollableHeight > 0) {
        const progress = (scrollTop / totalScrollableHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
      }

      // Check if scrolled to the bottom of the current article
      const currentArticle = articleRefs.current[currentArticleIndex];
      if (
        currentArticle &&
        scrollTop + windowHeight >=
          currentArticle.offsetTop + currentArticle.offsetHeight
      ) {
        loadNextArticle();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentArticleIndex, loadedArticles]);

  const loadNextArticle = () => {
    if (currentArticleIndex < dummyArticles.length - 1) {
      const nextIndex = currentArticleIndex + 1;
      setCurrentArticleIndex(nextIndex);
      setLoadedArticles((prev) => [...prev, dummyArticles[nextIndex]]);
    }
  };

  return (
    <div>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200">
        <div
          className="h-full bg-blue-500 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Render all loaded articles */}
      {loadedArticles.map((article, index) => (
        <div
          key={index}
          ref={(el) => (articleRefs.current[index] = el)}
          className="p-4 max-w-3xl mx-auto"
        >
          <p>{article}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlesComponent;
