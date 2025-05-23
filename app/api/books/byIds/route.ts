import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { bookIds }: { bookIds: string[] } = await req.json();

    console.log("💛💙🤍🤎 bookIds", bookIds);

    if (!Array.isArray(bookIds) || bookIds.length === 0) {
      return NextResponse.json(
        { error: "bookIds is required and must be a non-empty array" },
        { status: 400 }
      );
    }

    const books = await prisma.book.findMany({
      where: {
        id: {
          in: bookIds,
        },
      },
    });
    console.log("💛💙🤍🤎 books", books);

    return NextResponse.json({ books }, { status: 200 });
  } catch (error) {
    console.error("Error fetching books in /api/bookss/byIds:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// // Avec fonction GET (mais mieux d'utiliser POST si on doit envoyer beaucoup de données : peut dépasse le limite d'URL d'un GET)

// import { prisma } from "@/lib/prisma";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   // Récupère les params de l'URL
//   const { searchParams } = new URL(req.url);
//   const bookIdsParam = searchParams.get("bookIds");

//   if (!bookIdsParam) {
//     return NextResponse.json({ error: "Missing bookIds" }, { status: 400 });
//   }

//   const bookIds = bookIdsParam.split(",").map((id) => id.trim());

//   try {
//     const books = await prisma.book.findMany({
//       where: {
//         id: { in: bookIds },
//       },
//     });

//     return NextResponse.json({ books }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching books:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
