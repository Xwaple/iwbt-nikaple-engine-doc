Prism.languages.gml = Prism.languages.extend("clike", {
  keyword: /\b(?:.+(?=\s*=))\b|\b(?:alarm|bbox_bottom|bbox_left|bbox_right|bbox_top|depth|direction|friction|gravity|gravity_direction|hspeed|id|image_alpha|image_angle|image_blend|image_index|image_number|image_single|image_speed|image_xscale|image_yscale|mask_index|object_index|path_endaction|path_index|path_orientation|path_position|path_positionprevious|path_scale|path_speed|persistent|solid|speed|sprite_height|sprite_index|sprite_width|sprite_xoffset|sprite_yoffset|timeline_index|timeline_loop|timeline_position|timeline_running|timeline_speed|visible|vspeed|x|xprevious|xstart|y|yprevious|ystart|background_alpha|background_blend|background_color|background_foreground|background_height|background_hspeed|background_htiled|background_index|background_showcolor|background_visible|background_vspeed|background_vtiled|background_width|background_x|background_xscale|background_y|background_yscale|caption_health|caption_lives|caption_score|current_day|current_hour|current_minute|current_month|current_second|current_time|current_weekday|current_year|cursor_sprite|debug_mode|error_last|error_occurred|event_action|event_number|event_object|event_type|fps|game_id|gamemaker_pro|gamemaker_registered|gamemaker_version|health|instance_count|instance_id|keyboard_key|keyboard_lastchar|keyboard_lastkey|keyboard_string|lives|mouse_button|mouse_lastbutton|mouse_x|mouse_y|program_directory|room|room_caption|room_first|room_height|room_last|room_persistent|room_speed|room_width|score|secure_mode|show_health|show_lives|show_score|temp_directory|transition_color|transition_kind|transition_steps|view_angle|view_current|view_enabled|view_hborder|view_hport|view_hspeed|view_hview|view_object|view_vborder|view_visible|view_vspeed|view_wport|view_wview|view_xport|view_xview|view_yport|view_yview|working_directory|SCOPE_OTHERS|SCOPE_DEFAULT|SCOPE_ALL)\b/,
  number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
  tag: /\bglobalvar|var|if|else|switch|case|default|break|for|repeat|while|do|until|continue|exit|return|with|argument_relitive|argument9|argument8|argument7|argument6|argument5|argument4|argument3|argument2|argument15|argument14|argument13|argument12|argument11|argument10|argument1|argument0|argument\b/,
  function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
  constant: /\bbm_add|bm_dest_alpha|bm_dest_color|bm_inv_dest_alpha|bm_inv_dest_color|bm_inv_src_alpha|bm_inv_src_color|bm_max|bm_normal|bm_one|bm_src_alpha|bm_src_alpha_sat|bm_src_color|bm_subtract|bm_zero|c_aqua|c_black|c_blue|c_dkgray|c_fuchsia|c_gray|c_green|c_lime|c_ltgray|c_maroon|c_navy|c_olive|c_orange|c_purple|c_red|c_silver|c_teal|c_white|c_yellow|cr_appstart|cr_arrow|cr_arrrow|cr_beam|cr_cross|cr_default|cr_drag|cr_handpoint|cr_help|cr_hourglass|cr_hsplit|cr_multidrag|cr_no|cr_nodrop|cr_none|cr_size_all|cr_size_nesw|cr_size_ns|cr_size_nwse|cr_size_we|cr_sqlwait|cr_uparrow|cr_vsplit|dll_cdecl|dll_stdcall|ef_cloud|ef_ellipse|ef_explosion|ef_firework|ef_flare|ef_rain|ef_ring|ef_smoke|ef_smokeup|ef_snow|ef_spark|ef_star|ev_alarm|ev_animation_end|ev_boundary|ev_close_button|ev_collision|ev_create|ev_destroy|ev_draw|ev_end_of_path|ev_game_end|ev_game_start|ev_global_left_button|ev_global_left_press|ev_global_left_release|ev_global_middle_button|ev_global_middle_press|ev_global_middle_release|ev_global_press|ev_global_release|ev_global_right_button|ev_global_right_press|ev_global_right_release|ev_joystick1_button1|ev_joystick1_button2|ev_joystick1_button3|ev_joystick1_button4|ev_joystick1_button5|ev_joystick1_button6|ev_joystick1_button7|ev_joystick1_button8|ev_joystick1_down|ev_joystick1_left|ev_joystick1_right|ev_joystick1_up|ev_joystick2_button1|ev_joystick2_button2|ev_joystick2_button3|ev_joystick2_button4|ev_joystick2_button5|ev_joystick2_button6|ev_joystick2_button7|ev_joystick2_button8|ev_joystick2_down|ev_joystick2_left|ev_joystick2_right|ev_joystick2_up|ev_keyboard|ev_keypress|ev_keyrelease|ev_left_button|ev_left_press|ev_left_release|ev_middle_button|ev_middle_press|ev_middle_release|ev_mouse|ev_mouse_enter|ev_mouse_leave|ev_mouse_wheel_down|ev_mouse_wheel_up|ev_no_button|ev_no_more_health|ev_no_more_lives|ev_other|ev_outside|ev_right_button|ev_right_press|ev_right_release|ev_room_end|ev_room_start|ev_step|ev_step_begin|ev_step_end|ev_step_normal|ev_trigger|ev_user0|ev_user1|ev_user10|ev_user11|ev_user12|ev_user13|ev_user14|ev_user15|ev_user2|ev_user3|ev_user4|ev_user5|ev_user6|ev_user7|ev_user8|ev_user9|fa_archive|fa_bottom|fa_center|fa_directory|fa_hidden|fa_left|fa_middle|fa_readonly|fa_right|fa_sysfile|fa_top|fa_volumeid|false|mb_any|mb_left|mb_middle|mb_none|mb_right|pr_linelist|pr_linestrip|pr_pointlist|pr_trianglefan|pr_trianglelist|pr_trianglestrip|ps_change_all|ps_change_motion|ps_change_shape|ps_deflect_horizontal|ps_deflect_vertical|ps_distr_gaussian|ps_distr_invgaussian|ps_distr_linear|ps_force_constant|ps_force_linear|ps_force_quadratic|ps_shape_diamond|ps_shape_ellipse|ps_shape_line|ps_shape_rectangle|pt_shape_circle|pt_shape_cloud|pt_shape_disk|pt_shape_explosion|pt_shape_flare|pt_shape_line|pt_shape_pixel|pt_shape_ring|pt_shape_smoke|pt_shape_snow|pt_shape_spark|pt_shape_sphere|pt_shape_square|pt_shape_star|se_chorus|se_compressor|se_echo|se_equalizer|se_flanger|se_gargle|se_none|se_reverb|true|ty_real|ty_string|vk_add|vk_alt|vk_anykey|vk_backspace|vk_control|vk_decimal|vk_delete|vk_divide|vk_down|vk_end|vk_enter|vk_escape|vk_f1|vk_f10|vk_f11|vk_f12|vk_f2|vk_f3|vk_f4|vk_f5|vk_f6|vk_f7|vk_f8|vk_f9|vk_home|vk_insert|vk_lalt|vk_lcontrol|vk_left|vk_lshift|vk_multiply|vk_nokey|vk_numpad0|vk_numpad1|vk_numpad2|vk_numpad3|vk_numpad4|vk_numpad5|vk_numpad6|vk_numpad7|vk_numpad8|vk_numpad9|vk_pagedown|vk_pageup|vk_pause|vk_printscreen|vk_ralt|vk_rcontrol|vk_return|vk_right|vk_rshift|vk_shift|vk_space|vk_subtract|vk_tab|vk_up\b/
});
