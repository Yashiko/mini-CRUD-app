
$(document).ready(function () {

    let html;
    for (let i = 0; i < MOCK_DATA.length; i++) {
        html += "<br>" + MOCK_DATA[i].id + ": " + MOCK_DATA[i].first_name + " " + MOCK_DATA[i].last_name + ", " + MOCK_DATA[i].gender + ", " + MOCK_DATA[i].age + ", " + MOCK_DATA[i].country + ";<br>";
    };
    $("#names").html(html);

    $("#btn").click(function () {
        let inputValue = $("#value").val().toLowerCase();

        $.each(MOCK_DATA, function () {
            if (inputValue === this.first_name.toLowerCase()) {
                $("#names").html("<br>" + this.id + ": " + this.first_name + " " + this.last_name + ", " + this.gender + ", " + this.age + ", " + this.country + ";<br>");
                return false;
            } else {
                $("#names").html("<h1>Tokio asmens Nera</h1>");
            };
        });
        if (inputValue == " ") {
            $("#names").html(html);
        }
    });

    $("#button").click(function(){
        let inputNameValue = $("#inputName").val();
        let inputLastNameValue = $("#inputLastName").val();
        let inputGenderValue = $("#inputGender").val();
        let inputAgeValue = $("#inputAge").val();
        let inputCountryNameValue = $("#inputCountry").val();

        MOCK_DATA.push({"id":2, "first_name":inputNameValue,"last_name":inputLastNameValue,"gender":inputGenderValue,"age":inputAgeValue,"country":inputCountryNameValue});
        $("#names").append( "<br>" + MOCK_DATA.id + ": " + MOCK_DATA.first_name + " " + MOCK_DATA.last_name + ", " + MOCK_DATA.gender + ", " + MOCK_DATA.age + ", " + MOCK_DATA.country + ";<br>")
        

    });

   
    });