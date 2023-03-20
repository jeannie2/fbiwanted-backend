import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const createSchema = yup.object({
  criminalName: yup.string().required(),
  description: yup.string().required()
})

const controllersApiTipsCreate = async (req, res) => {
  try {
    const { body, session: { user: { id: userId } = {} } = {} } = req
    const verifiedData = await createSchema.validate(body, { abortEarly: false, stripUnknown: true })
    const newTip = await prisma.tip.create({
      data: {
        User: userId ? {
          connect: {
            id: userId
          }
        } : {},
        ...verifiedData
      }
    })
    return res.status(201).json(newTip)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTipsCreate
