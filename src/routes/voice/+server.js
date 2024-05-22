import { prisma } from "$lib/database"

export async function GET() {
    const amountAtSpot = await prisma.amountAtSpot.findFirst({
        where: {
            id: 1
        }
    })
    const currentAmount = amountAtSpot.amount
    const data = `<Response><say>There are ${currentAmount} people waiting</say></Response>`
    const headers = new Headers()
    headers.append('Content-Type', 'application/xml')
    return new Response(data, { headers })
}