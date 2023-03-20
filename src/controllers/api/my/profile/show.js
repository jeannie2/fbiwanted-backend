import _ from 'lodash'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiMyProfile = async (req, res) => {
  try {
    const { session: { user: { id } } } = req
    const foundUser = await prisma.user.findFirst({
      where: { id }
    })
    return res.json(_.omit(foundUser, ['passwordHash']))
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMyProfile
