/*!
 * Reverse Raffle JavaScript 
 * Date: 2013-10-03
 */

	$(document).ready(function(){
		$('#RaffleTitle').text($('#TitleInput').val());
		$('#center-header').css("display", "block");
		
	});

	$(function() {

		$('#RaffleTitle').click(function() {

			$("#dialog-log").dialog({
				modal: true,
				//width: 'auto',
				height: 'auto',
				width: "500", 
				//height: "90%", 
				left: "20%", 
				top: "10%", 
				buttons: {
					Ok: function() {
						$(this).dialog( "close" );
					}
				}
			});

		});
		
		$( "#radio" ).buttonset();
  
		$('#TitleInput').keyup(function() {
			$('#RaffleTitle').text($('#TitleInput').val());
		});

		// run the currently selected effect

		// callback function to bring a hidden box back
		function callback() {
			//setTimeout(function() {
			//	$( "#effect" ).removeAttr( "style" ).hide().fadeIn();
			//}, 1000 );
		};

		// set effect from select menu value
		$("#showSettings").click(function() {
			
			if ($(this).attr("alt") === "Hide Settings") {
				// most effect types need no options passed by default
				var options = {};
				// some effects have required parameters
				// run the effect
				$( "#effect" ).hide("slide", options, 1000, callback );

				//$( "#button" ).text("Show");	
				$(this).attr("alt","Show Settings") ;
			}
			else
			{
				// most effect types need no options passed by default
				var options = {};
				// some effects have required parameters
				// run the effect
				//$( "#effect" ).removeAttr( "style" ).hide().fadeIn();
				$( "#effect" ).show( "slide", 1000 );
				//$( "#button" ).text("Hide");	
				$(this).attr("alt","Hide Settings") ;
			}
			
//			this.val("clicked");
			return false;
		});

		$("#UpdateBoard").click(function() {
			var strNewDiv;
			var intNumBlocks;
			
			$( ".ticketblock" ).remove();
			intNumBlocks = $( "#DefaultBoards option:selected" ).text();
			
			for (var i=0; i < intNumBlocks; i++)
			{
				if (i < 9) {
					strTicket = '00' + (i + 1);
				}
				else if (i >= 9 && i < 99) {
					strTicket = '0' + (i + 1);
				}
				else if (i >= 99) {
					strTicket = (i + 1);
				}
				
				strNewDiv =  '<div id="tixblock'  + strTicket + '" class="ticketblock" align="center">';
				strNewDiv += '<div id="tix'  + strTicket + '" class="ticket unsold" align="center">';
				strNewDiv += '<div align="center" class="ticketcenter">'  + strTicket + '</div>';
				strNewDiv += '<div class="toggle-sold">SOLD</div>';
				strNewDiv += '<div class="toggle-unsold">UNSOLD</div>';
				strNewDiv += '</div></div>';
				
				$('#board').append(strNewDiv);

			}
			if (intNumBlocks == "100") {
				$(".ticketblock").css("width", "10%");
				$(".ticketblock").css("height", "10%");
				$(".ticketcenter").css("margin-top", "20%");
			}
			else if (intNumBlocks == "150") {
				$(".ticketblock").css("width", "10%");
				$(".ticketblock").css("height", "6.66%");
			}
			else if (intNumBlocks == "200") {
				$(".ticketblock").css("width", "10%");
				$(".ticketblock").css("height", "5%");
				$(".ticketcenter").css("margin-top", "5%");
			}
			else if (intNumBlocks == "250") {
				$(".ticketblock").css("width", "10%");
				$(".ticketblock").css("height", "4%");
			}
			else if (intNumBlocks == "300") {
				$(".ticketblock").css("width", "5%");
				$(".ticketblock").css("height", "6.66%");
				$(".ticketcenter").css("margin-top", "0%");
			}

			$('#ticketsRemaining').text( $('.sold').length );
			$('#ticketsTotal').text( $('.sold').length );

			$('#right-header').css("display","block");
			
			$(".toggleticket").click(function() {
				if ($(this).parent().hasClass("sold")) {
					$(this).parent().removeClass("sold");
					$(this).parent().addClass("unsold");
					$(this).text("SOLD");
					$('#ticketsRemaining').text( $('.sold').length );
					$('#ticketsTotal').text( $('.sold').length );
				}
				else if ($(this).parent().hasClass("unsold")) {
					$(this).parent().removeClass("unsold");
					$(this).parent().addClass("sold");
					$(this).text("UNSOLD");
					$('#ticketsRemaining').text( $('.sold').length );
					$('#ticketsTotal').text( $('.sold').length );
				}
			});
			$('.toggle-sold').click(function() {
				if ($(this).parent().hasClass("unsold")) {
					$(this).parent().removeClass("unsold");
					$(this).parent().addClass("sold");
					$('#ticketsRemaining').text( $('.sold').length );
					$('#ticketsTotal').text( $('.sold').length );
				}
			});
			$('.toggle-unsold').click(function() {
				if ($(this).parent().hasClass("sold")) {
					$(this).parent().removeClass("sold");
					$(this).parent().addClass("unsold");
					$('#ticketsRemaining').text( $('.sold').length );
					$('#ticketsTotal').text( $('.sold').length );
				}
			});

			$('#RunRaffle').css("display","initial");
		
		});

		$("#CustomUpdateBoard").click(function() {
			var strNewDiv;
			var intNumBlocks;
			
			var intNumRows;
			var intNumCols;

			$(".ticketblock").remove();
			intNumBlocks = $( "#DefaultBoards option:selected" ).text();
			
			intNumRows = $("#NumRows").val();
			intNumCols = $("#NumCols").val();
			intNumBlocks = intNumRows * intNumCols;

			strWidthPct = (100 / intNumCols) + '%';
			strHeightPct = (100 / intNumRows) + '%';

			for (var i=0; i < intNumBlocks; i++)
			{
				if (i < 9) {
					strTicket = '00' + (i + 1);
				}
				else if (i >= 9 && i < 99) {
					strTicket = '0' + (i + 1);
				}
				else if (i >= 99) {
					strTicket = (i + 1);
				}
				
				strNewDiv =  '<div id="tix'  + strTicket + '" class="ticketblock" align="center">';
				strNewDiv += '<div id="tix'  + strTicket + 'test" class="ticket" align="center">';
				strNewDiv += '<div class="ticketcenter">'  + strTicket;
				strNewDiv += '<div style="height: 4px; width: 4px; background-color: blue;"></div>';
				strNewDiv += '</div></div></div>';

				$('#board').append(strNewDiv);
			}
			
			$(".ticketblock").css("width", strWidthPct);
			$(".ticketblock").css("height", strHeightPct);

			$('#ticketsRemaining').text( $('.sold').length );
			$('#ticketsTotal').text( $('.sold').length );
		});

		$("#UpdateUnsold").click(function() {

			intFirstUnsold = parseInt($("#startUnsold").val());
			intLastUnsold = parseInt($("#endUnsold").val());

			for (var i = intFirstUnsold; i <= intLastUnsold; i++)
			{
				if (i < 10) {
					strTicket = '#tix00' + i;
				}
				else if (i >= 10 && i < 100) {
					strTicket = '#tix0' + i;
				}
				else if (i >= 100) {
					strTicket = '#tix' + i;
				}

				if ($(strTicket).hasClass("sold")) {
					$(strTicket).removeClass("sold");
					$(strTicket).addClass("unsold");
					$(strTicket).children(".toggleticket").text("SOLD");
				}
			}
			$('#ticketsRemaining').text( $('.sold').length );
			$('#ticketsTotal').text( $('.sold').length );
		});

		$("#UpdateSold").click(function() {

			intFirstSold = parseInt($("#startSold").val());
			intLastSold = parseInt($("#endSold").val());

			for (var i = intFirstSold; i <= intLastSold; i++)
			{
				if (i < 10) {
					strTicket = '#tix00' + i;
				}
				else if (i >= 10 && i < 100) {
					strTicket = '#tix0' + i;
				}
				else if (i >= 100) {
					strTicket = '#tix' + i;
				}

				if ($(strTicket).hasClass("unsold")) {
					$(strTicket).removeClass("unsold");
					$(strTicket).addClass("sold");
					$(strTicket).children(".toggleticket").text("UNSOLD");
				}
			}
			$('#ticketsRemaining').text( $('.sold').length );
			$('#ticketsTotal').text( $('.sold').length );
		});

		$("#RunRaffle").click(function() {

			$(".toggleticket").remove();
			$(".toggle-sold").remove();
			$(".toggle-unsold").remove();
			
			$('.sold').each(function() {
				$(this).children( ".ticketcenter" ).addClass( "draw" );
				$(this).addClass('ticket-highlight');
			});
			
			$( "#effect" ).hide("slide", 1000);
			$('#showSettings').attr("alt","Show Settings");
			
			$('#winner').css("display","block");

			bindDrawClass();
		});


		function undoClickedTicket(clickedDiv)  {
			
			var dateLocal = new Date();
			
			var intCounter = parseInt($("#DrawCounter").text()) + 1;
			$("#DrawCounter").text(intCounter);
			$("#draw-num").append(intCounter + "<br>");

			$("#winner-loser").append("UNDO<br>");

			strDrawTime = dateLocal.getMonth() + 1 + '/';
			strDrawTime += dateLocal.getDate() + '/';
			strDrawTime += dateLocal.getFullYear().toString().slice(2,4) + ' ';
			strDrawTime += (dateLocal.getHours() < 10 ? '0' : '') + dateLocal.getHours() + ':';
			strDrawTime += (dateLocal.getMinutes() < 10 ? '0' : '') + dateLocal.getMinutes() + ':';
			strDrawTime += (dateLocal.getSeconds() < 10 ? '0' : '') + dateLocal.getSeconds();
			
			$("#draw-time").append(strDrawTime + "<br>");

			strTicketText = $(clickedDiv).prev().text();
			
			intStartDrawNum = strTicketText.indexOf("(");
			strTicketDraw = strTicketText.substr(intStartDrawNum,(strTicketText.length-intStartDrawNum));

			$(clickedDiv).prev().text(strTicketText.substr(0,intStartDrawNum-1));

			$("#ticket-num").append(strTicketText.substr(0,intStartDrawNum-1) + "<br>");

			$(clickedDiv).prev().addClass("draw");
			
			$(clickedDiv).parent().removeClass("loser");
			$(clickedDiv).parent().removeClass("winner");
			
			strPrevTicketDraw = strTicketText.substr(intStartDrawNum + 1,(strTicketText.length-intStartDrawNum - 2));
			strPrevTicketDraw = "(" + (strPrevTicketDraw - 1) + ")";
			
			var foundin = $('.ticketcenter:contains(' + (strPrevTicketDraw) + ')');
			foundin.next().addClass("undo-draw");
			foundin.next().children().css("display","block");
			$(clickedDiv).remove();

			intNumLosers = $('.loser').length;
			intNumWinners = $('.winner').length;
			$('#ticketsRemaining').text( ($('#ticketsTotal').text() - (intNumLosers + intNumWinners)) );

			$(".draw").unbind("click");
			bindDrawClass();
			
		};

		function bindDrawClass()  {
			$(".draw").click(function() {

				var dateLocal = new Date();
				
				var intCounter = parseInt($("#DrawCounter").text()) + 1;
				$("#DrawCounter").text(intCounter);
				$("#draw-num").append(intCounter + "<br>");

				$("#ticket-num").append($(this).text() + "<br>");
				//$("#winner-loser").append("WINNER<br>");
				strDrawTime = dateLocal.getMonth() + 1 + '/';
				strDrawTime += dateLocal.getDate() + '/';
				strDrawTime += dateLocal.getFullYear().toString().slice(2,4) + ' ';
				strDrawTime += (dateLocal.getHours() < 10 ? '0' : '') + dateLocal.getHours() + ':';
				strDrawTime += (dateLocal.getMinutes() < 10 ? '0' : '') + dateLocal.getMinutes() + ':';
				strDrawTime += (dateLocal.getSeconds() < 10 ? '0' : '') + dateLocal.getSeconds();
				
				$("#draw-time").append(strDrawTime + "<br>");

				var intNumLosers;
				var intNumWinners;
				
				intNumLosers = $('.loser').length;
				intNumWinners = $('.winner').length;
				//alert('Draw No: ' + (intNumLosers + intNumWinners + 1));
				
				if ($(this).parent().hasClass("sold")) {

					if ((intNumLosers + intNumWinners + 1) == 1	) {
						$("#winner-loser").append("WINNER<br>");
						
						$(this).parent().addClass("winner");
						$(this).removeClass("draw");
						$(this).unbind("click");

						$('#winner-text').text('Congratulations Ticket ' + $(this).parent().text() + '!');
						$('#winner').text('You have won ' + $('#TenthTicketVal').val() + '!');
						$('#draw-instructions').text('Please draw 8 losing tickets, and then');
						$('#draw-instructions-winner').text('1 WINNING TICKET!');
						
						$( "#dialog-message" ).dialog({
							resizable: false,
							width: 'auto',
							modal: true,
							buttons: {
								Ok: function() {
									$(this).dialog( "close" );
								}
							}
						});
					}
					else if (($('#ticketsTotal').text() - (intNumLosers + intNumWinners + 1)) == 9) {

						$(this).removeClass("draw");
						$(this).unbind("click");

						var strWinners;
						strWinners = '';
						
						$('.draw').each(function() {
							strTicketID = $(this).parent().attr('id');
							strWinners += strTicketID.slice(3, strTicketID.length) + ', ';
						});

						if (((intNumLosers + intNumWinners + 1)% 10) == 0) {
							$("#winner-loser").append("WINNER<br>");
							
							$(this).parent().addClass("winner");
							$('#winner-text').html('Congratulations Ticket ' + $(this).parent().text() + '!');
							$('#draw-instructions').html('AND TO THE FINAL 9!</br>Tickets ' + strWinners.slice(0, strWinners.length - 2) );
						}
						else {
							$("#winner-loser").append("LOSER<br>");
							
							$(this).parent().addClass("loser");
							$('#winner').css("display","none");
							$('#winner-text').html('Congratulations to the FINAL 9!');
							$('#draw-instructions').text('Tickets ' + strWinners.slice(0, strWinners.length - 2));
						}

						$('#draw-instructions-winner').text('Please Have your ticket and prepare for the FINAL 10!');
						
						$('.draw').each(function() {
							$(this).unbind("click");
						});
						
						$( "#dialog-message" ).dialog({
							resizable: false,
							width: 500, 
							modal: true,
							buttons: {
								Ok: function() {
									$(this).dialog( "close" );
								}
							}
						});
			
					}
					else if (((intNumLosers + intNumWinners + 1)% 10) == 0) {

						$("#winner-loser").append("WINNER<br>");

						$(this).parent().addClass("winner");
						$(this).removeClass("draw");
						$(this).unbind("click");
						
						$('#winner-text').text('Congratulations Ticket ' + $(this).parent().text() + '!');

						if (($('#ticketsTotal').text() - (intNumLosers + intNumWinners + 1))  < 20) {
							if  (($('#ticketsTotal').text() - (intNumLosers + intNumWinners + 1))  === 19) {
								$('#draw-instructions').text('Please draw 9 losing tickets and the final Winner');
								$('#draw-instructions-winner').text('Prepare for the final TOP TEN!');
							}
							else {
								$('#draw-instructions').text('Please draw ' + (($('#ticketsTotal').text() - (intNumLosers + intNumWinners + 1)) - 9) + ' losing tickets');
								$('#draw-instructions-winner').text('Prepare for the final TOP TEN!');
							}
						}
						else {
							$('#draw-instructions').text('Please draw 9 losing tickets, and then');
						}
						
						$( "#dialog-message" ).dialog({
							resizable: false,
							width: 'auto',
							modal: true,
							buttons: {
								Ok: function() {
									$(this).dialog( "close" );
								}
							}
						});
			
					}
					else {
						$("#winner-loser").append("LOSER<br>");

						$(this).parent().addClass("loser");
						$(this).removeClass("draw");
						$(this).unbind("click");
					}
					
					intNumLosers = $('.loser').length;
					intNumWinners = $('.winner').length;
					$('#ticketsRemaining').text( ($('#ticketsTotal').text() - (intNumLosers + intNumWinners)) );
					
					$(this).append(' (' + (intNumLosers + intNumWinners) + ')');

					$(".undo-draw").removeClass("undo-draw");
					$(".undo-icon").css("display","none");
					
					strUndoDiv =  '<div class="undo-draw" align="center">';
					strUndoDiv += '<img id="showUndo' + (intNumLosers + intNumWinners) + '" class= "undo-icon" src="./images/undo.png">';
					strUndoDiv += '</div>';
					$(this).parent().append(strUndoDiv);
					
					$(".undo-draw").click(function() {
						undoClickedTicket($(this));
					});
					
				}
			});

		};
	});
	
