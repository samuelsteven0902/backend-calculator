import RiwayatKalkulator from '../models/KalkulatorModel'

export const getHistory = async(req,res) =>{
    try {
        const response = await RiwayatKalkulator.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}