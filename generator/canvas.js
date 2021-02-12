$(document).ready(function () {
    var element = $("#downloadeddiv");
    var getCanvas;
    $("#btn-Preview-Image").on("click", function () {
        html2canvas(element, {
            onrendered: function (canvas) {
                getCanvas = canvas;
            },
        });
    });
    $("#btn-Convert-Html2Image").on("click", function () {
        var imgageData = getCanvas.toDataURL("image/png");
        var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("#btn-Convert-Html2Image")
            .attr("download", "tr_" + document.roz.trainNo.value + "_" + document.roz.trainName.value + ".png")
            .attr("href", newData);
    });
});
