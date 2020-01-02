/* facade.ts */
import Cashier from './cashier';
import DoctorOffice from './doctor-office';
import InternalMedicine from './internal-medicine';
import Pharmacy from './pharmacy';

export default class HospitalFacade {
    public static seeAStomachProblem(person, cases, money) {
        // InternalMedicine(子系统: 内科-拍胃镜)
        const isDepartmentBusy = InternalMedicine.instance.isDepartmentBusy();
        InternalMedicine.instance.doGastroscope(person);
        // DoctorOffice(子系统: 医生办公室-看医生)
        const isDoctorBusy = DoctorOffice.instance.isDoctorBusy();
        const prescription = DoctorOffice.instance.seeAStomachProblem(person, cases);
        // Pharmacy(子系统: 药房-取药)
        const medicine = Pharmacy.instance.takeMedicine(prescription);
        // Cashier(子系统: 收费处-收费)
        Cashier.instance.payTheBill(money);
    }
}