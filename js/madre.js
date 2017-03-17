$('#fecha_parto').datepicker({
    format: "dd/mm/yyyy",
    maxViewMode: 0,
    autoclose: true,
    startDate: "-today",
});

$('#fecha_nacimiento').datepicker({
    format: "dd/mm/yyyy",
    maxViewMode: 0,
    autoclose: true,
    endDate: "-today"
});
