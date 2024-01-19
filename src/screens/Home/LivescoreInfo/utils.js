import { dfs } from "../../../API/utils";

export const months = {
    'January': 'জানুয়ারি',
    'February': 'ফেব্রুয়ারি',
    'March': 'মার্চ',
    'April': 'এপ্রিল',
    'May': 'মে',
    'June': 'জুন',
    'July': 'জুলাই',
    'August': 'আগস্ট',
    'September': 'সেপ্টেম্বর',
    'October': 'অক্টোবর',
    'November': 'নভেম্বর',
    'December': 'ডিসেম্বর',
    'January,': 'জানুয়ারি,',
    'February,': 'ফেব্রুয়ারি,',
    'March,': 'মার্চ,',
    'April,': 'এপ্রিল,',
    'May,': 'মে,',
    'June,': 'জুন,',
    'July,': 'জুলাই,',
    'August,': 'আগস্ট,',
    'September,': 'সেপ্টেম্বর,',
    'October,': 'অক্টোবর,',
    'November,': 'নভেম্বর,',
    'December,': 'ডিসেম্বর,',
};

export const giveBelaOfTheDay = (start_time_of_match_hours) => {
    let h = "";
    if (
      (
        start_time_of_match_hours >= 0 && start_time_of_match_hours < 3
      )
      ||
      (
        start_time_of_match_hours >= 20 && start_time_of_match_hours <= 24
      )
    ) {
        h = 'রাত';
    }
    else if (start_time_of_match_hours === 0) {
        h = 'রাত';
    }
    else if (start_time_of_match_hours < 7 && start_time_of_match_hours >= 3) {
        h = 'ভোর';
    }
    else if (start_time_of_match_hours >= 7 && start_time_of_match_hours < 11) {
        h = 'সকাল';
    }
    else if (start_time_of_match_hours >= 11 && start_time_of_match_hours < 12) {
        h = 'বেলা';
    }
    else if (start_time_of_match_hours>= 12 && start_time_of_match_hours< 15) {
        h = 'দুপুর';
    }
    else if (start_time_of_match_hours>= 15 && start_time_of_match_hours< 18) {
        h = 'বিকাল';
    }
    else if (start_time_of_match_hours>= 18 && start_time_of_match_hours< 20) {
        h = 'সন্ধ্যা';
    }
  
    return h ; 
  }

export const getTime = (start_time, day) => {

    let today = new Date();
    let [days, month, year] = day[0].split(" ");
    let todayOrNotToday = (today.getDate()) === days ? ('আজ ' + days) : days;
    let start_time_of_match = new Date(start_time);
    let start_time_of_match_hours = start_time_of_match.getHours();
    let h = '', test = '', st = '';
    let blabla = day[0].split(" ");
  
    if (blabla[2]) {
        for (let i in blabla) {
            if (months[blabla[i]]) {
                test += months[blabla[i]] + ' ';
            }
            else {
                test += blabla[i] + ' ';
            }
        }
    }
    else {
  
    }
  
    h = giveBelaOfTheDay(start_time_of_match_hours);
    h += ' ' + (
        dfs(
          start_time_of_match_hours> 12
                ?
                (
                  start_time_of_match_hours- 12
                )
                :
                (
                    (
                      start_time_of_match_hours=== 0
                        &&
                        '12'
                    )
                    ||
                    start_time_of_match.getHours()
                )
        )
    ) + '.' + dfs(
        (
          start_time_of_match.getMinutes() > 0
                ?
                start_time_of_match.getMinutes()
                :
                (
                    '0' + start_time_of_match.getMinutes()
                )
        )
    ) + 'টায়';
  
    test = test.slice(0, -1);
  
    st = (test !== '' && `${test}, ${h}`) || (`${todayOrNotToday} ${months[month]} ${year}, ${h}`);
    return st;
  }