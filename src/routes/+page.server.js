import { prisma } from '../lib/database.js'

export const actions = {
    add: async () => {
        const amountAtSpot = await prisma.amountAtSpot.findFirst({
            where: {
                id: 1
            }
        })

        const amount = amountAtSpot.amount
        console.log('old:', amount)

        const newAmount = await prisma.amountAtSpot.update({
            where: {
                id: 1
            },
            data: {
                amount: amount + 1
            }
        })
        console.log('new:', newAmount.amount)
    },

    remove: async ({ request }) => {
        const amountAtSpot = await prisma.amountAtSpot.findFirst({
            where: {
                id: 1
            }
        })
        const amount = amountAtSpot.amount
        console.log('old:', amount)

        const newAmount = await prisma.amountAtSpot.update({
            where: {
                id: 1
            },
            data: {
                amount: amount - 1
            }
        })
        console.log('new:', newAmount.amount)
    }
}