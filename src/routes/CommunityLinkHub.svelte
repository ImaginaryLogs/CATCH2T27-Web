<script>
  import Carousel from "svelte-carousel";

  const links = [
      {
          link: "https://www.roymerreviewers.com/",
          logo: "images/communitylinkhub/RoymerReviews.png",
          title: "Roymer Reviewers",
          description: "A collection of reviewers",
      },
      {
          link: "https://github.com/zelkim/pretzel",
          // logo: "images/communitylinkhub/Pretzel.png",
          title: "Pretzel",
          description:
              "Pretzel is a Discord bot that ports the My.LaSalle course offerings page into a Discord bot, offering seamless class selection integration within Discord servers",
      },
      {
          link: "https://a.berde.co/",
          // logo: "images/communitylinkhub/Berde.png",
          title: "Archer API",
          description: "Lasallian data: by Lasallians, for Lasallians",
      },
      {
          link: "https://dlsupts.vercel.app/",
          logo: "images/communitylinkhub/PTS.png",
          title: "Peer Tutor Society",
          description:
              "Have a challenging subject or two this term? Don't worry, Peer Tutors Society is here to help you with your academic needs!",
      },
  ];

  const multipleLinks = [
      {
          title: "University Student Government",
          logo: "images/communitylinkhub/USG.jpg",
          links: [
              {
                  title: "Website",
                  link: "https://dlsuusg.com/",
              },
              {
                  title: "Facebook",
                  link: "https://www.facebook.com/dlsu.usg/",
              },
              {
                  title: "Instagram",
                  link: "https://www.instagram.com/usg_dlsu/",
              },
              {
                  title: "Twitter",
                  link: "https://x.com/usg_dlsu",
              },
              {
                  title: "Telegram",
                  link: "https://t.me/usg_dlsu",
              },
          ],
      },
      {
          title: "Computer Studies Government",
          logo: "images/communitylinkhub/CSG.jpg",
          links: [
              {
                  title: "ONECCS Website",
                  link: "https://oneccshub.com/",
              },
              {
                  title: "Facebook",
                  link: "https://www.facebook.com/DLSU.CSG/",
              },
              {
                  title: "Instagram",
                  link: "https://www.instagram.com/dlsu_csg/",
              },
              {
                  title: "Twitter",
                  link: "https://x.com/dlsucsg",
              },
              {
                  title: "LinkedIn",
                  link: "https://www.linkedin.com/company/computer-studies-government-de-la-salle-university",
              },
              {
                  title: "Email",
                  link: "mailto:usgccs@dlsu.edu.ph",
              },
          ],
      },
      {
          title: "Laguna Campus Student Government",
          logo: "images/communitylinkhub/LCSG.jpg",
          links: [
              {
                  title: "Facebook",
                  link: "https://www.facebook.com/LCSGDLSU/",
              },
              {
                  title: "Instagram",
                  link: "https://www.instagram.com/stcgovernment/",
              },
              {
                  title: "Twitter",
                  link: "https://x.com/stcg_dlsu",
              },
              {
                  title: "Email",
                  link: "mailto:lcsg@dlsu.edu.ph",
              },
          ],
      },
  ];
</script>

<div class="flex flex-col items-center justify-center gap-4 p-4">
  <h1 class="text-4xl font-head">Community Link Hub</h1>
  <h2 class="text-2xl font-subtitle">Organizations and other ID123s churn out useful stuff for you to you use</h2>
  <div class="w-full bg-gray-200 md:w-3/4 rounded-3xl">
      <Carousel>
          {#each links as { link, logo, title, description }}
              <a
                  class="flex flex-col items-center w-full p-4 md:flex-row md:max-h-96"
                  href={link}
                  target="_blank"
              >
                  {#if logo}
                      <img
                          src={logo}
                          alt={title}
                          class="object-contain size-36"
                      />
                  {/if}
                  <div class="flex flex-col gap-4 p-4">
                      <h1 class="text-4xl font-head">{title}</h1>
                      <p>{description}</p>
                  </div>
              </a>
          {/each}
          {#each multipleLinks as { title, links, logo }}
              <div
                  class="flex flex-col items-center w-1/2 p-4 md:flex-row md:max-h-96"
              >
                  <img
                      src={logo}
                      alt={title}
                      class="object-contain size-36"
                  />
                  <div class="flex flex-col w-full gap-4 p-4">
                      <h1 class="text-4xl font-head">{title}</h1>
                      <div class="grid grid-cols-4 gap-4 w-fit">
                          {#each links as { title, link }}
                              <div class="flex flex-row items-center">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="block w-4 h-auto min-w-4 max-w-4"
                                  >
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                      />
                                  </svg>
                                  <a
                                      href={link}
                                      target="_blank"
                                      class="font-bold text-dark-purple hover:text-purple hover:underline"
                                  >
                                      {title}
                                  </a>
                              </div>
                          {/each}
                      </div>
                  </div>
              </div>
          {/each}
      </Carousel>
  </div>
</div>
