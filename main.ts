PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.forward)) {
        wuKong.setAllMotor(10, 10)
    } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.stop)) {
        wuKong.stopAllMotor()
    } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnright)) {
        wuKong.setAllMotor(10, -10)
    } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnleft)) {
        wuKong.setAllMotor(-10, 10)
    } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.back)) {
        wuKong.setAllMotor(-10, -10)
    }
})
