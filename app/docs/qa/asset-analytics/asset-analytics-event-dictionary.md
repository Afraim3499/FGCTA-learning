# Asset Analytics Event Dictionary

| Event | Route type | Trigger | Required payload |
|---|---|---|---|
| `asset_markets_index_viewed` | public | Markets index view | `route_type`, `user_state` |
| `asset_public_page_viewed` | public | Public asset page view | `route_type`, `user_state`, `asset_slug`, `asset_class`, `asset_symbol` |
| `asset_class_filter_clicked` | public | Markets index asset class filter click | `route_type`, `user_state`, `filter_value` |
| `asset_public_cta_clicked` | public | Public CTA click | `route_type`, `user_state`, `destination`, `cta_id` |
| `asset_lab_index_viewed` | paid | Asset Lab index view | `route_type`, `user_state` |
| `asset_lab_page_viewed` | paid | Paid asset page view | `route_type`, `user_state`, `asset_slug`, `asset_class`, `asset_symbol` |
| `asset_lab_tab_clicked` | paid | Asset Lab tab click | `route_type`, `user_state`, `asset_slug`, `asset_class`, `tab_key`, `tab_label` |
| `asset_lab_exposure_map_viewed` | paid | Exposure Map tab selected | `route_type`, `user_state`, `asset_slug`, `asset_class`, `tab_key` |
| `asset_lab_verified_claims_viewed` | paid | Verified Claims tab selected | `route_type`, `user_state`, `asset_slug`, `asset_class`, `tab_key` |
| `asset_lab_source_pack_viewed` | paid | Sources tab selected | `route_type`, `user_state`, `asset_slug`, `asset_class`, `tab_key`, `source_count` |
| `asset_related_lesson_clicked` | both | Related lesson click | `route_type`, `user_state`, `destination`, `link_label` |
| `asset_related_strategy_clicked` | both | Related strategy click | `route_type`, `user_state`, `destination`, `link_label` |
| `asset_pricing_cta_clicked` | public | Public asset pricing CTA click | `route_type`, `user_state`, `asset_slug`, `asset_class`, `destination`, `cta_id` |

Payload policy:

- Asset-specific events include asset slug and asset class.
- User state is one of `logged_out`, `logged_in`, `paid`, `admin`, or `unknown`.
- No event payload includes email, password, token, raw user id, or personal contact data.
- Analytics failure is swallowed by the browser tracker so the UI remains usable.
