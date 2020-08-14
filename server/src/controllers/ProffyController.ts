import connection from '../database/connection'
import { Request, Response } from 'express'

interface scheduleItem extends Array<any> {
    week_day: number,
    from: number,
    to: number
}

export default class Proffy {
    async update (request: Request, response: Response) {
        const { schedule, whatsapp, bio, cost } = request.body

        const id = request.headers.authorization

        await connection('users').where('id', id).update({
            whatsapp, bio
        })

        await connection('classes').join('users', 'users.id', '=', 'classes.user_id')
        .where('id', id)
        .update({
            cost
        })

        const allSchedules = schedule as scheduleItem

        await allSchedules.map(async ({ week_day, from, to }) => {
            console.log('allSCHEDULESSSSSSSSSS ', allSchedules)
            await connection('classes').join('users', 'users.id', '=', 'classes.user_id')
            .where('users.id', id)
            .innerJoin('class_schedule', 'class_schedule.class_id', '=', 'classes.id')
            .where('class_schedule.week_day', week_day)
            .update({
                week_day,
                from,
                to
            })
        })

        return response.json({
            id,
            whatsapp,
            bio,
            cost,
            schedule
        })
    } 
}

// await connection('classes').join('users', 'users', '=', 'classes.user_id')
// .join('class_schedule', 'class_schedule.class_id', '=', 'classes.id')

// await connection('class_schedule').join('classes', 'classes.id', '=', 'class_schedule.class_id')
//             .where('user_id', id)
//             .update({
//                 week_day,
//                 from,
//                 to
//             })