function keplerProblem(mean, eccentricity) {
    console.log(Number(approximation(mean, eccentricity, 0).toFixed(9)))

    function approximation(E0, ecc, series) {
        if (Math.abs(mean - (E0 - ecc * Math.sign(E0))) < 1e-9 || series > 200) {
            return E0
        }

        return approximation(E0 - (E0 - ecc * Math.sin(E0) - mean) / (1 - ecc * Math.cos(E0)), ecc, ++series)
    }
}

keplerProblem(1, 0)
keplerProblem(3.1415926535, 0.75)
keplerProblem(0.25, 0.99)