
(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function() {
    loadData()
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


})(jQuery); // End of use strict

data = 
  [
    {"Realism (1840s-1880s)": 
      [
        {"Realism (1840s-1880s)": 
          [
            "",
            "In its specific sense realism refers to a mid nineteenth century artistic movement characterised by subjects painted from everyday life in a naturalistic manner; however the term is also generally used to describe artworks painted in a realistic almost photographic way.", 
            "#realism", 
            "https://galleryintell.com/wp-content/uploads/2014/02/%C3%89douard-Manet-Le-D%C3%A9jeuner-sur-lherbe1.jpg"
          ]
        }, 
        {"Édouard Manet (1832–1883)": 
          [
            "French painter",
            "Movements: Impressionism, Realism, Modern art, Modernism", 
            "#edouardmanet", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg/1200px-%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg"
          ]
        },
        {"Gustave Courbet (1819–1877)": 
          [
            "French painter",
            "Movements: Realism, Romanticism, Academic art", 
            "#gustavecourbet", 
            "https://www.nationalgallery.org.uk/media/30089/courbet-gustave-c-face-half.jpg?center=0.26119402985074625,0.40460526315789475&mode=crop&width=430&bgcolor=fff&rnd=132138116838270000"
          ]
        }
      ]
    },
    {"Impressionism (1862 - 1892)": 
      [
        {"Impressionism (1862 - 1892)": 
          [
            "",
            "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life.", 
            "#impressionism", 
            "https://images.fineartamerica.com/images-medium-large-5/1-impression-sunrise-claude-monet.jpg"
          ]
        }, 
        {"Claude Monet (1840–1926)": 
          [
            "French painter",
            "Movements: Impressionism, Modern art, Realism", 
            "#claudemonet", 
            "https://upload.wikimedia.org/wikipedia/commons/a/a4/Claude_Monet_1899_Nadar_crop.jpg"
          ]
        },
        {"Berthe Morisot (1841–1995)": 
          [
            "French painter",
            "Movements: Impressionism, Modern art, Realism", 
            "#berthemorisot", 
            "https://i.pinimg.com/originals/9d/43/1c/9d431c58290796a55bf3dbb6385981c5.jpg"
          ]
        },
        {"Pierre-Auguste Renoir (1841–1919)": 
          [
            "French artist",
            "Movements: Impressionism, Modern art, Realism", 
            "#pierreaugusterenoir", 
            "https://sothebys-com.brightspotcdn.com/dims4/default/8c17974/2147483647/strip/true/crop/328x328+101+105/resize/1200x1200!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F8b%2Fcb%2Fad69237540228c98949afdfe9077%2Fpierre-auguste-renoir-uncropped-image.jpg"
          ]
        }
      ]
    },
    {"Post-Impressionism (1886-1905)": 
      [
        {"Post-Impressionism (1886-1905)": 
          [
            "",
            "Post-Impressionism encompasses a wide range of distinct artistic styles that all share the common motivation of responding to the opticality of the Impressionist movement.", 
            "#postimpressionism", 
            "https://media.overstockart.com/optimized/cache/data/product_images/VG485-1000x1000.jpg"
          ]
        }, 
        {"Paul Cézanne (1839–1906)": 
          [
            "French artist",
            "Movements: Post-Impressionism, Modern art, Impressionism, Romanticism, Cubism", 
            "#paulcézanne", 
            "https://media.carredartistes.com/img/cms/Blog/2017-05-17%20-%20C%C3%A9zanne/2017-05-17-paul-cezanne.png"
          ]
        },
        {"Vincent van Gogh (1853–1890)": 
          [
            "Dutch painter",
            "Movements: Realism, Post-Impressionism, Modern art, Impressionism, Japonisme, Cloisonnism, Pointillism, Neo-Impressionism", 
            "#vincentvangogh", 
            "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NTIzMzc4MTI2MDM4MjM5/vincent_van_gogh_self_portrait_painting_musee_dorsay_via_wikimedia_commons_promojpg.jpg"
          ]
        },
        {"Paul Gauguin (1848–1903)": 
          [
            "French painter, printmaker, sculptor",
            "Movements: Post-Impressionism, Modern art, Impressionism, Primitivism, Synthetism, Symbolism", 
            "#paulgauguin", 
            "https://1.bp.blogspot.com/-OY7IPdGBbzg/Vzvc1kABNCI/AAAAAAAAAUE/OpKpdcV8HQQC3mgkHWgLhvGkqEcT3kizgCLcB/s400/Portrait-of-Paul-Gauguin-from-1891.png"
          ]
        }
      ]
    },
    {"Neo-Impressionism (1884-1886)": 
      [
        {"Neo-Impressionism (1884-1886)": 
          [
            "",
            "Neo-impressionism is the name given to the post-impressionist work of Georges Seurat, Paul Signac and their followers who, inspired by optical theory, painted using tiny adjacent dabs of primary colour to create the effect of light.", 
            "#neoimpressionism", 
            "https://cdn.britannica.com/41/24341-050-DC561751/canvas-oil-La-Grande-Jatte-Georges-Seurat-1884.jpg"
          ]
        }, 
        {"Georges Seurat (1859–1891)": 
          [
            "French artist",
            "Movements: Pointillism, Post-Impressionism, Impressionism, Modern art, Neo-Impressionism, Neoclassicism, Divisionism", 
            "#georgesseurat", 
            "https://upload.wikimedia.org/wikipedia/commons/7/76/Georges_Seurat_1888.jpg"
          ]
        }
      ]
    },
    {"Cubism (1907-1922)": 
      [
        {"Cubism (1907-1922)": 
          [
            "",
            "Cubism was a revolutionary new approach to representing reality invented in around 1907–08 by artists Pablo Picasso and Georges Braque. They brought different views of subjects (usually objects or figures) together in the same picture, resulting in paintings that appear fragmented and abstracted.", 
            "#cubism", 
            "https://www.moma.org/media/W1siZiIsIjQzODQ1MiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=8b2a1c3992bba555"
          ]
        }, 
        {"Pablo Picasso (1881–1973)": 
          [
            "Spanish painter, sculptor, printmaker, ceramicist, theatre designer ",
            "Movements: Cubism, Surrealism, Expressionism, Post-Impressionism",
            "#pablopicasso", 
            "https://www.biography.com/.image/t_share/MTY2NTIzNTAyNjgwMDg5ODQy/pablo-picasso-at-his-home-in-cannes-circa-1960-photo-by-popperfoto_getty-images.jpg"
          ]
        }, 
        {"Georges Braque (1882–1963)": 
          [
            "French painter, collagist, draughtsman, printmaker, sculptor",
            "Movements: Cubism, Synthetic cubism, Expressionism, Fauvism",
            "#georgesbraque", 
            "https://www.thoughtco.com/thmb/_cpH4N5bjMFUgXiU9sSZE0onmrk=/1609x1052/filters:fill(auto,1)/georges-braque-older-ffa4ae583d9c4f4397a8cecba9c72d0e.jpg"
          ]
        }
      ]
    },
    {"German Expressionism (1905-1933)": 
      [
        {"German Expressionism (1905-1933)": 
          [
            "",
            "German expressionism was an early twentieth century German art movement that emphasized the artist's inner feelings or ideas over replicating reality, and was characterised by simplified shapes, bright colours and gestural marks or brushstrokes.", 
            "#germanexpressionism", 
            "https://www.wassilykandinsky.net/images/works/35.jpg"
          ]
        }, 
        {"Die Brücke (1905-1913)": 
          [
            "",
            "Progenitors of the movement later known as German Expressionism, Die Brücke formed in Dresden in 1905 as a bohemian collective of artists in staunch opposition to the older, established bourgeois social order of Germany.", 
            "#diebrücke", 
            "https://www.moma.org/media/W1siZiIsIjQyODY0NSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=86361fae3acf4726"
          ]
        },
        {"Der Blaue Reiter (1911-1914)": 
          [
            "",
            "Der Blaue Reiter was a German expressionist group originating in Munich in 1909.", 
            "#derblaueReiter", 
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/Wassily_Kandinsky%2C_1903%2C_The_Blue_Rider_%28Der_Blaue_Reiter%29%2C_oil_on_canvas%2C_52.1_x_54.6_cm%2C_Stiftung_Sammlung_E.G._B%C3%BChrle%2C_Zurich.jpg"
          ]
        },
        {"Ernst Ludwig Kirchner (1880-1936)": 
          [
            "German painter, printmaker",
            "Movements: Expressionism, Modern art, German Expressionism, Cubism",
            "#ernstludwigkirchner", 
            "https://sothebys-com.brightspotcdn.com/dims4/default/20f03ef/2147483647/strip/true/crop/1202x1202+2765+484/resize/1200x1200!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F5f%2Fa1%2F69ebb9974da990fb11293267aeb2%2Fpa7t40.jpg"
          ]
        },
        {"Emil Nolde (1867-1956)": 
          [
            "German-Danish painter, printmaker, watercolourist",
            "Movements: Expressionism, Modern art",
            "#emilmolder", 
            "https://i0.wp.com/www.famouspainters.net/painters/emil-nolde.jpg"
          ]
        },
        {"Wassily Kandinsky (1866-1944)": 
          [
            "Russian painter, art theorist",
            "Movements: Expressionism, Abstract art, Post-Impressionism",
            "#wassilykandinsky", 
            "https://i.pinimg.com/originals/b9/f4/d8/b9f4d8a1b56712728cddbe24cfe9e97f.jpg"
          ]
        },
        {"Franz Marc (1880-1916)": 
          [
            "German painter, printmaker",
            "Movements: Expressionism, Cubism, German Expressionism, Modern art, Der Blaue Reiter, Post-Impressionism, Impressionism, Realism",
            "#franzmarc", 
            "https://www.franzmarc.com/Franz%20Marc.jpg"
          ]
        }
      ]
    },
    {"Italian Futurism (1909-1944)": 
      [
        {"Italian Futurism (1909-1944)": 
          [
            "",
            "Futurism was an Italian art movement of the early twentieth century that aimed to capture in art the dynamism and energy of the modern world.", 
            "#futurism", 
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/The_City_Rises_by_Umberto_Boccioni_1910.jpg"
          ]
        }, 
        {"Umberto Boccioni (1882–1916)":
          [
            "Italian painter, sculptor",
            "Movements: Futurism, Divisionism, Cubism, Post-Impressionism, Expressionism, Modern art, Impressionism",
            "#umbertoboccioni", 
            "https://img.lacstatic.it/_photo/2019/dicembre/CULTURA/2019_boccioni.jpg"
          ]
        },
        {"Gino Severini (1883-1966)": 
          [
            "Italian painter",
            "Movements: Futurism, Cubism, Modern art, Neoclassicism",
            "#ginoseverini", 
            "https://upload.wikimedia.org/wikipedia/commons/4/4b/Gino_Severini_at_the_opening_of_his_solo_exhibition_at_the_Marlborough_Gallery%2C_London%2C_1913_%28detail%29.jpg"
          ]
        },
        {"Giacomo Balla (1871-1958)": 
          [
            "Italian painter, art teacher, poet",
            "Movements: Futurism, Modern art, Abstract art, Pointillism, Divisionism, Impressionism",
            "#giacomoballa", 
            "https://cs3cdn.haworth.com/sites/cassina.com/files/styles/scheda_designer/public/balla_big_0.jpg?itok=_3iiQ3rB"
          ]
        }
      ]
    },
    {"Dada (1916-1924)": 
      [
        {"Dada (1916-1924)": 
          [
            "",
            "Dada was an art movement formed during the First World War in Zurich in negative reaction to the horrors and folly of the war. The art, poetry and performance produced by dada artists is often satirical and nonsensical in nature.", 
            "#dada", 
            "https://www.tate.org.uk/art/images/work/T/T07/T07573_9.jpg"
          ]
        }, 
        {"Marcel Duchamp (1887–1968)":
          [
            "French-American painter, sculptor, chess player, writer ",
            "Movements: Expressionism, Dada, Post-Impressionism, Cubism",
            "#marcelduchamp", 
            "https://walker-web.imgix.net/cms/Duchamp_Marcel_19651.jpg?auto=format,compress&w=1920&h=1200&fit=max&dpr=1.5"
          ]
        },
        {"Jean (Hans) Arp (1886–1966)": 
          [
            "German-French sculptor, painter, poet",
            "Movements: Surrealism, Abstract art, Dada, Modern art, Biomorphism",
            "#jeanarp", 
            "https://photos1.blogger.com/blogger/3242/2391/1600/hans_arp.0.jpg"
          ]
        },
        {"Sophie Taeuber-Arp (1889-1943)": 
          [
            "Swiss artist, painter, sculptor, textile designer, furniture and interior designer, architect, dancer",
            "Movements: Constructivism, Geometric abstraction, Abstract art, Dada, Modern art, Concrete art",
            "#sophietaeuberarp", 
            "https://static01.nyt.com/images/2020/07/10/arts/09ARP1/09ARP1-mediumSquareAt3X.jpg"
          ]
        },
        {"Hannah Höch (1889-1978)": 
          [
            "German artist",
            "Movements: Modern art, Dada",
            "#hannahhöch", 
            "https://4.bp.blogspot.com/-N_5ZW69e8kM/WhHjvH95l-I/AAAAAAAAG94/8A0urCWAm4gaDw9V8P_12RaorpTXt7lAgCEwYBhgL/s1600/01%2BHannah-Hoch.jpg"
          ]
        },
        {"Kurt Schwitters (1887-1948)": 
          [
            "German artist",
            "Movements: Dada, Modern art, Expressionism, Abstract art, Surrealism, Merz (art style)", 
            "#kurtschwitters", 
            "https://artedeximena.files.wordpress.com/2010/10/m-kurt-schwitters-0020.jpg?w=706"
          ]
        }
      ]
    },
    {"Suprematism (1913-1920s)": 
      [
        {"Suprematism (1913-1920s)": 
          [
            "",
            "Name given by the Russian artist Kasimir Malevich to the abstract art he developed from 1913 characterised by basic geometric forms, such as circles, squares, lines and rectangles, painted in a limited range of colours.", 
            "#suprematism", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/White_on_White_%28Malevich%2C_1918%29.png/1200px-White_on_White_%28Malevich%2C_1918%29.png"
          ]
        }, 
        {"Kazimir Malevich (1879–1935)":
          [
            "Russian artist, art theorist",
            "Movements: Suprematism, Cubism, Cubo-Futurism, Naïve art",
            "#kazimirmalevich", 
            "https://4.bp.blogspot.com/-uQXVKYkIQgk/XEUD4LRpcCI/AAAAAAAAlas/R-JbF_6UG5oYPfIQeMU_AvmvI6gFCjw9QCLcBGAs/s1600/Malevich%2BKazimir%2BvA.jpg"
          ]
        }
      ]
    },
    {"Ashcan School (1900-1915)": 
      [
        {"Ashcan School (1900-1915)": 
          [
            "",
            "Known for its gritty urban subject matter, dark palette, and gestural brushwork, the Ashcan School was a loosely knit group of artists based in New York City who were inspired by the painter Robert Henri.", 
            "#ashcanschool", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bellows_CliffDwellers.jpg/1200px-Bellows_CliffDwellers.jpg"
          ]
        }, 
        {"Robert Henri (1865–1929)":
          [
            "American painter, teacher",
            "Movements: Modern art, American Realism, Ashcan School, Realism",
            "#roberthenri", 
            "https://crystalbridges.org/wp-content/uploads/2017/06/roberthenri.jpg"
          ]
        }, 
        {"John Sloan (1871–1951)":
          [
            "American painter",
            "Movements: Neoclassicism, American Realism, Ashcan School, Modern art, Realism",
            "#johnsloan", 
            "https://www.illustrationhistory.org/images/made/images/uploads/John_French_Sloan_1_580_385_c1.jpg"
          ]
        },
        {"George Bellows (1882–1925)":
          [
            "American painter",
            "Movements: Modern art, American Realism, Ashcan School, Realism, American Impressionism, Impressionism",
            "#georgebellows", 
            "https://3.bp.blogspot.com/-3OZFU8bbVhI/T7EiKcBOP9I/AAAAAAAADSg/z2UCNIXSdAY/s1600/George%2BBellows%252C%2B2.jpg"
          ]
        }
      ]
    },
    {"Precisionism (1925-1945)": 
      [
        {"Precisionism (1925-1945)": 
          [
            "",
            "Precisionism was the first indigenous modern art movement in the United States and an early American contribution to the rise of Modernism.", 
            "#precisionism", 
            "https://www.artic.edu/iiif/2/80fda6aa-e094-324a-c26a-e6ca64596293/full/1200,/0/default.jpg?w=1200&h=800&fit=crop"
          ]
        }, 
        {"Georgia O’Keeffe (1887–1986)":
          [
            "American artist",
            "Movements: Abstract art, American modernism, Abstract expressionism, Modernism, Precisionism",
            "#georgiaokeeffe", 
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-517323730-1565187892.jpg?crop=1.00xw:0.797xh;0,0&resize=640:*"
          ]
        }, 
        {"Joseph Stella (1887–1946)":
          [
            "American-Italian painter",
            "Movements: Modern art, Futurism, American modernism, Modernism, Abstract art, Precisionism",
            "#josephstella", 
            "https://www.thoughtco.com/thmb/w0JASrkFAUoxKWcZf0fPrnvDY4g=/576x576/smart/filters:no_upscale()/CharlesSheelerhorizontal-3d523fa4feb3445e8545afdbf7c97e53.png"
          ]
        },
        {"Charles Sheeler (1883–1965)":
          [
            "American painter, commercial photographer",
            "Movements: American modernism, Modern art, Realism, Neoclassicism, Precisionism",
            "#charlessheeler", 
            "https://www.thoughtco.com/thmb/w0JASrkFAUoxKWcZf0fPrnvDY4g=/576x576/smart/filters:no_upscale()/CharlesSheelerhorizontal-3d523fa4feb3445e8545afdbf7c97e53.png"
          ]
        },
        {"Charles Demuth (1883–1935)":
          [
            "American painter",
            "Movements: Expressionism, American modernism, Modern art, Modernism, Impressionism, Realism, Precisionism",
            "#charlesdemuth", 
            "https://www.getty.edu/museum/media/images/web/enlarge/113826B1V1.jpg"
          ]
        }
      ]
    },
    {"Regionalism (1928-1943)": 
      [
        {"Regionalism (1928-1943)": 
          [
            "",
            "At the height of the Great Depression, American Regionalists turned away from European modernism and urban abstraction to embrace subjects of the heartland.", 
            "#precisionism", 
            "https://i.pinimg.com/originals/23/8e/74/238e7461fd27d2f336c1797d7e58d969.jpg"
          ]
        }, 
        {"Thomas Hart Benton (1889–1975)":
          [
            "American painter",
            "Movements: Social realism, Synchromism, American Realism, American modernism, Modern art, Regionalism",
            "#thomashartbenton", 
            "https://s3.amazonaws.com/media.wbur.org/wordpress/18/files/2015/06/AP410428023.jpg"
          ]
        }, 
        {"Grant Wood (1891–1942)":
          [
            "American painter",
            "Movements: Regionalism, Impressionism, Post-Impressionism, Social realism, Modern art, American modernism, Modernism",
            "#grantwood", 
            "https://toomeyco.com/wp-content/uploads/2018/03/Grant_Wood_Portrait-2-468x480.jpg"
          ]
        }
      ]
    },
    {"Harlem Renaissance (1920-1940s)": 
      [
        {"Harlem Renaissance (1920-1940s)": 
          [
            "",
            "The Harlem Renaissance was the development of the Harlem neighborhood in New York City as a black cultural mecca in the early 20th Century and the subsequent social and artistic explosion that resulted.", 
            "#harlemrenaissance", 
            "https://media.nga.gov/iiif/public/objects/1/6/6/4/4/4/166444-primary-0-nativeres.ptif/full/!440,400/0/default.jpg"
          ]
        }, 
        {"Aaron Douglas (1899–1979)":
          [
            "American painter, illustrator, visual arts educator",
            "Movements: Social realism, Harlem Renaissance",
            "#aarondouglas", 
            "https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/5/6c/56cf843d-7013-592a-9228-94eaca27a1d6/5d8505911a7d7.image.jpg"
          ]
        }, 
        {"Lois Mailou Jones (1905–1998)":
          [
            "American Artist",
            "Movements: Harlem Renaissance",
            "#loismailoujones", 
            "https://upload.wikimedia.org/wikipedia/commons/9/9c/Lois_Jones%2C_artist_and_teacher_-_NARA_-_559227.jpg"
          ]
        }, 
        {"Palmer Hayden (1890–1973)":
          [
            "American painter",
            "Movements: Harlem Renaissance",
            "#palmerhayden", 
            "https://cdn.britannica.com/97/192097-050-45567C44/Palmer-Hayden.jpg"
          ]
        }, 
        {"Jacob Lawrence (1917–2000)":
          [
            "American painter",
            "Movements: Cubism, Contemporary art, Social realism, Modern art, Harlem Renaissance",
            "#jacoblawrence", 
            "https://jonathanboos.com/wp-content/uploads/jacob-lawrence.jpg"
          ]
        }
      ]
    },
    {"Surrealism (1924-1966)": 
      [
        {"Surrealism (1924-1966)": 
          [
            "",
            "A twentieth-century literary, philosophical and artistic movement that explored the workings of the mind, championing the irrational, the poetic and the revolutionary.", 
            "#surrealism", 
            "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg"
          ]
        }, 
        {"Salvador Dalí (1904–1989)":
          [
            "Spanish artist",
            "Movements: Surrealism, Expressionism, Post-Impressionism",
            "#salvadordalí", 
            "https://www.biography.com/.image/t_share/MTIwNjA4NjMzNTM4MDUzNjQ0/salvador-dali-40389-2-402.jpg"
          ]
        }, 
        {"René Magritte (1898–1967)":
          [
            "Belgian artist",
            "Movements: Surrealism, Art Deco, Cubism, Post-Impressionism, Modern art, Dada",
            "#renémagritte", 
            "https://www.renemagritte.org/images/rene-magritte-photo.jpg"
          ]
        },
        {"Frida Kahlo (1908–1954)":
          [
            "Mexican painter",
            "Movements: Naïve art, Modern art, Surrealism, Magical Realism, Symbolism, Naturalism, Primitivism, Social realism, Cubism",
            "#fridakahlo", 
            "https://www.tradesy.com/blog/wp-content/uploads/2015/07/Frida-Portrait-Thumbnail.jpg"
          ]
        }
      ]
    },
    {"Abstract Expressionism (1943-1965)": 
      [
        {"Abstract Expressionism (1943-1965)": 
          [
            "",
            "Abstract expressionism is the term applied to new forms of abstract art developed by American painters such as Jackson Pollock, Mark Rothko and Willem de Kooning in the 1940s and 1950s. It is often characterised by gestural brush-strokes or mark-making, and the impression of spontaneity.", 
            "#abstractexpressionism", 
            "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FHNQG7N1ltr6xNab49U3lWg%252Fjackson-pollock-number-1-1949-1949.jpg&width=800&height=600&quality=80"
          ]
        }, 
        {"Jackson Pollock (1912–1956)":
          [
            "American painter",
            "Movements: Abstract expressionism, Expressionism, Modern art, Action painting",
            "#jacksonpollock", 
            "https://sothebys-com.brightspotcdn.com/dims4/default/6926a54/2147483647/strip/true/crop/782x782+628+0/resize/1200x1200!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fc6%2Fdc%2Ff42d7f5c40cb94387f6e9c54a873%2F3548645.JPG"
          ]
        }, 
        {"Janet Sobel (1893–1968)":
          [
            "Ukrainian artist",
            "Movements: Abstract expressionism",
            "#janetsobel", 
            "https://www.artnet.com/WebServices/images/ll170610llgNJfDrCWBHBAD/portrait-of-janet-sobel.jpg"
          ]
        }, 
        {"Lee Krasner (1908–1984)":
          [
            "American painter",
            "Movements: Abstract expressionism, Modern art",
            "#leekrasner", 
            "https://sothebys-com.brightspotcdn.com/dims4/default/7b36052/2147483647/strip/true/crop/736x736+2020+690/resize/1200x1200!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F65%2Fc8%2F87dbb7704b1f8cd1ffde866b52ed%2Fgettyimages-3227258.jpg"
          ]
        }, 
        {"Willem de Kooning (1904–1997)":
          [
            "American-Dutch artist",
            "Movements: Abstract expressionism, Expressionism, Modern art",
            "#willemdekooning", 
            "https://sothebys-com.brightspotcdn.com/dims4/default/8921da1/2147483647/strip/true/crop/949x949+1417+242/resize/1200x1200!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Faa%2Ff8%2Fb59b91604fcdb0f916fbe4149d53%2Fgettyimages-3243871.jpg"
          ]
        }, 
        {"Elaine de Kooning (1908–1984)":
          [
            "American painter",
            "Movements: Abstract expressionism, Expressionism, Contemporary art",
            "#elainedekooning", 
            "https://theartgorgeous.com/wp-content/uploads/2019/07/d7hftxdivxxvm.cloudfront.net_.jpeg"
          ]
        }, 
        {"Norman Lewis (1904–1997)":
          [
            "American painter",
            "Movements: Abstract expressionism, Harlem Renaissance",
            "#normanlewis", 
            "https://m.theartstory.org/images20/new_design/c/c_lewis_norman.jpg"
          ]
        }
      ]
    }
  ]
function loadData(){
  loadPortfolio()
  loadModal()
}

function loadPortfolio() {
  // Add header to indicate food

  for(a of data) {
    console.log(Object.values(a))
    let pageSection = document.createElement("section");
    pageSection.classList.add("page-section", "portfolio");

    let container = document.createElement("div");
    container.classList.add("container");

    let sectionHeading = document.createElement("h2");
    sectionHeading.classList.add("page-section-heading", "text-center", "text-uppercase", "text-secondary", "mb-0");
    sectionHeading.textContent = Object.keys(a);

    let divider = document.createElement("div");
    divider.classList.add("divider-custom")
    divider.innerHTML = '<div class="divider-custom-line"></div><div class="divider-custom-icon"><i class="fas fa-star"></i></div><div class="divider-custom-line"></div>'

    let grid = document.createElement("div");
    grid.classList.add("row", "justify-content-center")
    for (b of Object.values(a)){
      for (dataElement of Object.values(b)){
        console.log(dataElement)
        loadGrid(grid, dataElement)  
      }
       
    }
    container.appendChild(sectionHeading)
    container.appendChild(divider)
    container.appendChild(grid)
    document.getElementById("portfolio").appendChild(pageSection).appendChild(container)

  }
  
}

function loadGrid(grid, dataElement){
  console.log(dataElement)
  let values = Object.values(dataElement)[0]

  let card = document.createElement("div");
  card.classList.add("card", "col-md-6", "col-lg-4" ,"mb-5", "pt-4");

  let portfolioItem = document.createElement("div");
  portfolioItem.classList.add("portfolio-item", "mx-auto", "rounded-top")
  portfolioItem.setAttribute("data-toggle", "modal");
  portfolioItem.setAttribute("data-target", values[2]);

  let caption = document.createElement("div");
  caption.classList.add("portfolio-item-caption", "d-flex", "align-items-center", "justify-content-center", "h-100", "w-100")

  let captionContent = document.createElement("div");
  captionContent.classList.add("portfolio-item-caption-content", "text-center", "text-white")
  captionContent.innerHTML = '<i class="fas fa-plus fa-3x"></i>'

  let img = document.createElement("img");
  img.classList.add("card-img-top", "rounded-top")
  img.setAttribute("src", values[3])

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "rounded-bottom")

  let name = document.createElement("h5");
  name.textContent = Object.keys(dataElement);

  let p1 = document.createElement("p");
  p1.textContent = values[0]

  let p2 = document.createElement("p");
  p2.textContent = values[1]

  
  let btn = document.createElement("a")
  btn.classList.add("btn", "btn-primary")
  btn.setAttribute("data-toggle", "modal");
  btn.setAttribute("data-target", values[2]);
  btn.textContent = "More"

  portfolioItem.appendChild(caption)
  portfolioItem.appendChild(img)
  caption.appendChild(captionContent)

  cardBody.appendChild(name)
  cardBody.appendChild(p1)
  cardBody.appendChild(p2)
  cardBody.appendChild(btn)

  card.appendChild(portfolioItem)
  card.appendChild(cardBody)

  grid.appendChild(card)
}
function loadModal(){

}
