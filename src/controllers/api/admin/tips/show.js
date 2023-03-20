import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiTipsShow = async (req, res) => {
  try {
    const { params: { tipId } } = req

    const foundTip = await prisma.tip.findUnique({
      where: { id: Number(tipId) }, // doesnt work with id
      rejectOnNotFound: true
    })
    return res.status(200).json(foundTip)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTipsShow

/* include: {
        user: {
          select: {
            id: true,
            avatar: true,
            name: true,
            bio: true
          }
        }
      } */
