format 224

classcanvas 128004 class_ref 128004 // Workshop
  classdiagramsettings member_max_width 0 end
  xyz 405.03 193.64 2000
end
classcanvas 128132 class_ref 128132 // Order
  classdiagramsettings member_max_width 0 end
  xyz 653.39 410.72 2005
end
classcanvas 128260 class_ref 134660 // Worker
  classdiagramsettings member_max_width 0 end
  xyz 856.59 154.28 2000
end
classcanvas 128388 class_ref 134788 // Client
  classdiagramsettings member_max_width 0 end
  xyz 41.02 416.82 2000
end
classcanvas 128516 class_ref 134916 // Article
  classdiagramsettings member_max_width 0 end
  xyz 550.26 1008.85 2000
end
classcanvas 128644 class_ref 135044 // Category
  classdiagramsettings member_max_width 0 end
  xyz 771.49 764.04 2000
end
classcanvas 128772 class_ref 135172 // Modele
  classdiagramsettings member_max_width 0 end
  xyz 474.84 525.66 2000
end
classcanvas 128900 class_ref 135300 // Mesure
  classdiagramsettings member_max_width 0 end
  xyz 218.53 754.83 2000
end
classcanvas 130820 class_ref 141828 // User
  classdiagramsettings member_max_width 0 end
  xyz 360.31 1.41 2005
end
classcanvas 132740 class_ref 141956 // LocationImage
  classdiagramsettings member_max_width 0 end
  xyz 86.27 228.44 2000
end
classcanvas 133124 class_ref 148484 // OrderItem
  classdiagramsettings member_max_width 0 end
  xyz 475.03 797.09 2000
end
relationcanvas 129284 relation_ref 128260 // sell
  geometry VH unfixed
  decenter_begin 136
  from ref 128004 z 2001 to point 418 1031
  line 133764 z 2001 label "sell" italic max_width 255 xyz 483 975 2001 to ref 128516
  no_role_a no_role_b
  multiplicity_a_pos 532 1041 3000 multiplicity_b_pos 403 343 3000
end
relationcanvas 129540 relation_ref 128516 // belong
  from ref 128644 z 2001 label "belong" italic max_width 255 xyz 637 659 2001 to ref 128772
  no_role_a no_role_b
  multiplicity_a_pos 544 606 3000 multiplicity_b_pos 741 778 3000
end
relationcanvas 129668 relation_ref 128644 // have
  decenter_end 421
  from ref 128388 z 2001 label "have" italic max_width 255 xyz 157 625 2001 to ref 128900
  no_role_a no_role_b
  multiplicity_a_pos 208 732 3000 multiplicity_b_pos 87 535 3000
end
relationcanvas 129924 relation_ref 128900 // pass
  from ref 128132 z 2006 label "pass" italic max_width 255 xyz 490 436 2006 to point 355.94 440.64
  line 128005 z 2006 to ref 128388
  no_role_a no_role_b
  multiplicity_a_pos 109 480 3000 multiplicity_b_pos 635 472 3000
end
relationcanvas 130692 relation_ref 135556 // add
  geometry VHV unfixed
  decenter_begin 165
  decenter_end 902
  from ref 128132 z 2006 to point 668 381.86
  line 134660 z 2006 label "add" italic max_width 255 xyz 580.5 367 2006 to point 506 381.86
  line 134788 z 2006 to ref 128004
  no_role_a no_role_b
  multiplicity_a_pos 491 343 3000 multiplicity_b_pos 653 388 3000
end
relationcanvas 130948 relation_ref 135684 // belong_to
  decenter_begin 532
  decenter_end 521
  from ref 130820 z 2006 label "belong_to" italic max_width 255 xyz 400 132 2006 to ref 128004
  no_role_a no_role_b
  multiplicity_a_pos 441 171 3000 multiplicity_b_pos 387 115 3000
end
relationcanvas 131332 relation_ref 136068 // work_for
  from ref 128004 z 2001 label "work_for" italic max_width 255 xyz 660 234 2001 to ref 128260
  no_role_a no_role_b
  multiplicity_a_pos 838 252 3000 multiplicity_b_pos 529 268 3000
end
relationcanvas 132868 relation_ref 136580 // have
  from ref 128004 z 2001 label "have" italic max_width 255 xyz 287 240 2001 to ref 132740
  no_role_a no_role_b
  multiplicity_a_pos 206 262 3000 multiplicity_b_pos 387 269 3000
end
relationcanvas 133252 relation_ref 143236 // <generalisation>
  decenter_begin 317
  decenter_end 527
  from ref 128516 z 2001 to ref 133124
  no_role_a no_role_b
  no_multiplicity_a no_multiplicity_b
end
relationcanvas 133380 relation_ref 143364 // have
  decenter_begin 474
  decenter_end 540
  from ref 133124 z 2001 label "have" italic max_width 255 xyz 484 686 2001 to ref 128772
  no_role_a no_role_b
  multiplicity_a_pos 476 621 3000 multiplicity_b_pos 497 775 3000
end
relationcanvas 133636 relation_ref 143620 // is_for
  geometry VH unfixed
  decenter_begin 523
  decenter_end 532
  from ref 128132 z 2006 to point 706 851
  line 134532 z 2006 label "is_for" italic max_width 255 xyz 615 839 2006 to ref 133124
  no_role_a no_role_b
  multiplicity_a_pos 567 861 3000 multiplicity_b_pos 691 536 3000
end
relationcanvas 134404 relation_ref 143876 // have
  decenter_begin 583
  decenter_end 532
  from ref 128900 z 2001 label "have" italic max_width 255 xyz 360 798 2001 to ref 133124
  no_role_a no_role_b
  multiplicity_a_pos 457 864 3000 multiplicity_b_pos 288 788 3000
end
end
