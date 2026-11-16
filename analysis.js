// ==========================================================================
// 📖 《猫捕雀》深度文本赏析数据库 (analysis.js) - 马来西亚文言文黄金范例版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句补全成分">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "<strong>（第1段）</strong>窗外有一片枣树林，幼雀常练习飞翔" + OMISSION_TAG("介词", "在") + "枣林下面。有一天，一只猫将身体隐蔽" + OMISSION_TAG("介词", "在") + "树林间，突然扑咬母雀。那四五只幼雀，喧闹着追赶恶猫，每往前进一步就越发愤怒。恶猫用力抓扑幼雀，但不能取胜，反而逃奔跑进屋里。母雀死了，那些幼雀围着屋子凄切悲鸣，多次飞进屋里寻母。过了好几天，" + OMISSION_TAG("主语", "幼雀") + "依然望着屋子悲鸣喧叫不停。<br>" +
        "<strong>（第2段）</strong>悲哀啊！恶猫一扑就夺走了四五只幼雀的母亲，人们虽然来不及搭救它，但内心没有不感到悲伤同情、感慨痛惜的。然而那恶猫却依然凶狠贪婪地注视着，只怕不能把它们的同类全部吃尽消灭。唉，它的本性是多么残忍啊！动物与动物之间互相残害，人类尚且讨厌这种行为；竟然还有凭借权势地位，施展帮凶爪牙，残害百姓来使自己发财获利的人，这又是为什么呢？" +
        "</span><br><br>" +
        "<strong>【出处背景与写作特色】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《猫捕雀》选自" + U_TAG("清") + "代散文家、外交家" + U_TAG("薛福成") + "（1838–1894，字叔耘，号庸庵）的《庸庵笔记》（收录于马来西亚《中二华文》第七单元第1课）。这是一篇短小精悍、锋芒毕露的<strong>借事说理（寓言性讽刺）文言小品</strong>。全文仅130余字，结构上采用<strong>“先叙后议、由物及人”</strong>的章法：第1段纯用客观凝练的白描记叙“恶猫噬母、雏雀逐猫悲鸣”；第2段陡然转入悲愤强烈的议论，以禽兽相残衬托人间官场，<strong>借贪婪凶残的恶猫讽刺封建社会鱼肉百姓、中饱私囊的贪官污吏</strong>，字字千钧，振聋发聩。</span>",

    paragraphs: {
        1: "<strong>【第1段：叙事——恶猫林间噬雀母，四五雏雀舍命噪逐】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "窗外有枣林，[雏雀][习]飞" + CARET + "其下。一日，猫[蔽身]" + CARET + "林间，[突噬]雀母。其雏四五，[噪]而[逐]猫，每进[益]怒。猫[奋攫][之]，不胜，反[奔]入室。雀母死，其雏绕室[啁啾]，[飞入室者三]。[越]数日，" + CARET + "[犹]望室而噪也。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "窗外有一片枣树林，[幼小的鸟雀]✓常[练习]✓飞翔" + OMISSION_TAG("介词", "于（在）") + "枣林下面。有一天，一只猫[隐蔽身体]✓" + OMISSION_TAG("介词", "于（在）") + "树林间，[突然扑咬]✓母雀。它的四五只幼雀，[喧闹叫喊着]✓[追赶]✓恶猫，每前进一步就[更加/越发]✓愤怒。猫[用力抓扑]✓[它们（幼雀）]✓，不能取胜，反而[逃跑]✓进入屋里。母雀死了，它的幼雀围着屋子[凄切啼叫]✓，[多次飞进屋里寻母]✓。[过了]✓好几天，" + OMISSION_TAG("主语", "幼雀") + "[还/依然]✓望着屋子悲鸣喧叫不停。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("益（每进益怒）", "更加、越发（程度副词）", "利益、好处") +
                       ANCIENT_MODERN_TAG("三（飞入室者三）", "虚指多次、屡次", "实数三") +
                       ANCIENT_MODERN_TAG("越（越数日）", "过、经过（动词）", "跨过、越发") +
                       GRAMMAR_TAG("倒装句（定语/状语后置）", "其雏四五（四五只幼雀） ／ 飞入室者三（多次飞入室中）") +
                       GRAMMAR_TAG("核心考点（雏雀形象）", "母子情深、依恋不舍，面对强暴不畏生死、奋起反抗") +
                   "</div>" +
               "</div>" +
           "</div>",

        2: "<strong>【第2段：议论——斥恶猫之忍，借物喻人痛斥“残民以自肥”者】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "哀哉！猫一[搏]而夺四五雏之母，人虽[不及]救之，未有不[恻焉][慨于中]者。而猫且[眈眈然]，[惟恐]不[尽]其类焉。呜呼，[何]其性之[忍]也！物与物相残，人且[恶]之；[乃]有凭权位，[张爪牙]，[残民以自肥]者，[何也]？" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "悲哀啊！恶猫一[扑击]✓就夺去了四五只幼雀的母亲，人们虽然[来不及]✓拯救它，但没有不[悲伤同情地]✓[在内心感慨痛惜]✓的。然而那恶猫却依然[凶狠贪婪地注视着]✓，[只怕]✓不能把它们的同类[全部消灭吃尽]✓。唉，它的天性是[多么]✓[残忍狠毒]✓啊！动物与动物之间互相残害，人类尚且[讨厌/厌恶]✓这种行为；[竟然]✓还有依仗权势地位，[施展帮凶爪牙]✓，[残害压迫百姓来使自己发财获利]✓的人，[这又是为什么呢]✓？" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("中（慨于中）", "内心、心中（名词）", "中间、里面") +
                       ANCIENT_MODERN_TAG("忍（何其性之忍）", "残忍、狠心（形容词）", "忍耐、忍受") +
                       ANCIENT_MODERN_TAG("恶（人且恶之）", "讨厌、厌恶（动词，破音读 wù）", "凶恶(è) 或 恶心(ě)") +
                       ANCIENT_MODERN_TAG("乃（乃有凭权位）", "竟然、却（副词）", "是、乃至") +
                       GRAMMAR_TAG("使动用法", "尽其类（使……灭尽） ／ 自肥（使自己富裕得利）") +
                       GRAMMAR_TAG("核心考点（借事讽理）", "以恶猫喻贪官污吏，以弱雀喻底层百姓，痛斥鱼肉百姓者禽兽不如") +
                   "</div>" +
               "</div>" +
           "</div>"
    }
};
