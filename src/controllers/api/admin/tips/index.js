import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiTipsIndex = async (req, res) => {
  try {
    const foundTips = await prisma.tip.findMany()
    return res.status(200).json(foundTips)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTipsIndex
