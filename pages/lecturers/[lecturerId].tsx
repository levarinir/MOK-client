import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { LecturerDetailPageBottomHero } from "@/components/LecturerDetailPageBottomHero";
import {
  LecturerDetailPageHeroSectionProps,
  LecturerDetailPageHeroSection,
} from "@/components/LecturerDetailPageHeroSection";
import {
  LecturerDetailPageReviewsSection,
  LecturerDetailPageReviewsSectionProps,
} from "@/components/LecturerDetailPageReviewsSection";
import { GetServerSideProps } from "next";

export interface LecturerDetailPageProps {
  lecturerDetail: LecturerDetailPageHeroSectionProps;
  lecturerOverallRating: number;
  lecturerReviews: LecturerDetailPageReviewsSectionProps["reviews"];
}

export const getServerSideProps: GetServerSideProps<
  LecturerDetailPageProps
> = async () => {
  // TODO: add server side data fetching
  // TODO: remove temporary placeholder
  return {
    props: {
      lecturerDetail: {
        lecturerName: "ןהכ זרא",
        lecturerTitle: "הקיטמתמב ריכב הצרמ",
        lecturerDescription:
          "הקיטמתמב תויורגבל החלצהל ץראה יבחרב םידימלת יפלא תואמ ןיכה רשא םוחתב קתו תונש 25 לעב הקיטמתמב ריכב הצרמ.ןוינכטה ומכ ,ץראב םירכומה תודסומב דמילו ירוקנא תשר לש םירפס תורשע בתכ םינשה ךרואל",
        lecturerFee: 140,
        lecturerImageSrc: "https://picsum.photos/seed/picsum/272/360",
      },
      lecturerOverallRating: 0.75,
      lecturerReviews: Array(3).fill({
        profilePictureSrc: "https://picsum.photos/seed/picsum/300/300",
        fullName: "יחרזמ ינד",
        rating: 0.8,
        content:
          ".ףששרע שבונ תיאחו ךשלתועש ולשח ורבלתו עשולש - טיוחמש שרעש בבשויה בינעוה .תנמ ןסומ טעמפל .הצגור ךנילב םומאיל רומוד זיווק .שידדג םעיתלו - גשרב םעיתפל - טויעמו טוצ ,לוד ,ופמיכל סא לקרמל ודנילב לפנטצת .קבולב ריטחס תילא גניסיפידא ררוטקסנוק ,טמא טיס רולוד",
      }),
    },
  };
};

export default function LecturerDetailPage(props: LecturerDetailPageProps) {
  return (
    <>
      <Header />
      <main>
        <LecturerDetailPageHeroSection {...props.lecturerDetail} />
        <LecturerDetailPageReviewsSection
          overallRating={props.lecturerOverallRating}
          reviews={props.lecturerReviews}
        />
        <LecturerDetailPageBottomHero />
      </main>
      <Footer />
    </>
  );
}
