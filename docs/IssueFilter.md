# IssueFilter

事项过滤器

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContentString** | **string** | 筛选组合，JSON 字符串&lt;br /&gt;例如：&#x60;{\&quot;filterIssueType\&quot;:\&quot;ALL\&quot;,\&quot;sort\&quot;:{\&quot;key\&quot;:\&quot;PRIORITY\&quot;,\&quot;value\&quot;:\&quot;DESC\&quot;},\&quot;conditions\&quot;:[{\&quot;value\&quot;:[\&quot;TODO\&quot;,\&quot;PROCESSING\&quot;],\&quot;key\&quot;:\&quot;STATUS_TYPE\&quot;,\&quot;fixed\&quot;:true,\&quot;filterIssueType\&quot;:\&quot;ALL\&quot;,\&quot;projectId\&quot;:1},{\&quot;value\&quot;:[],\&quot;key\&quot;:\&quot;ASSIGNEE\&quot;,\&quot;fixed\&quot;:true,\&quot;constValue\&quot;:[\&quot;UNSPECIFIC\&quot;],\&quot;filterIssueType\&quot;:\&quot;ALL\&quot;,\&quot;projectId\&quot;:1}]}&#x60; | [optional] [default to '']
**CreatedAt** | **number** | 创建时间戳 | [optional] [default to undefined]
**CreatorId** | **number** | 创建人 ID | [optional] [default to undefined]
**Id** | **number** | 过滤器 ID | [optional] [default to undefined]
**IsDefault** | **boolean** | 默认筛选器 | [optional] [default to false]
**IsSystem** | **boolean** | 是否是系统自带 | [optional] [default to false]
**IssueType** | **string** | 事项类型 | [optional] [default to '']
**Name** | **string** | 名称 | [optional] [default to '']
**SharedTeam** | **boolean** | 是否是团队筛选器 | [optional] [default to false]
**UpdatedAt** | **number** | 修改时间戳 | [optional] [default to undefined]

## Example

```typescript
import { IssueFilter } from './api';

const instance: IssueFilter = {
    ContentString,
    CreatedAt,
    CreatorId,
    Id,
    IsDefault,
    IsSystem,
    IssueType,
    Name,
    SharedTeam,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
