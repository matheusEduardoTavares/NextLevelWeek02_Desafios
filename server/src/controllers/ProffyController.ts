import connection from '../database/connection'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

interface scheduleItem extends Array<any> {
    week_day: number,
    from: number,
    to: number
}

export default class Proffy {
    async update (request: Request, response: Response) {
        try{
            const db = await connection.transaction()

            await db('class_schedule').where('class_id', 4)
            .where('id', 8)
            .update({
                week_day: 1,
                from: '12:00',
                to: '19:00'
            })

            const { schedule, whatsapp, bio, cost } = request.body

            const id = request.headers.authorization

            await db('users').where('id', id).update({
                whatsapp, bio
            })

            await db('classes').join('users', 'users.id', '=', 'classes.user_id')
            .where('id', id)
            .update({
                cost
            })

            const schedules = schedule as scheduleItem
            const allSchedules = schedules.sort(schedule.week_day)

            allSchedules.map(async ({week_day, to, from}, index) => {
                await db('classes').join('users', 'users.id', '=', 'classes.user_id')
                .where('users.id', id)
                .join('class_schedule', 'class_schedule.class_id', '=', 'classes.id')
                .then(async (res) => {
                    if (index === 0) {
                        await db('class_schedule').where('class_id', res[index]['class_id'])
                        .delete()
                    }
                    await db('class_schedule').insert({
                        week_day,
                        to,
                        from,
                        class_id: res[index]['class_id']
                    })
                })
            })

            await db.commit()

            return response.json({
                id,
                whatsapp,
                bio,
                cost,
                schedule
            })
        }
        catch (err){
            return response.status(500).json({error: err})
        }
    }

    async create (request: Request, response: Response) {
        const { name, lastname, password, email } = request.body

        
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